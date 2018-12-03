<template>
  <div>
    <div>
      <h3>Search and add a pin</h3>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>

        <button @click="searchList">Add</button>
      </label>
      <br>
    </div>
    <br>
    <gmap-map :center="center" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="clickMarker(m,index)"
      ></gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 37.40078, lng: 127.10813 },
      markers: [],
      places: [],
      currentPlace: null,
      getLat: null,
      getLng: null,
      lists: [],
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },
  created() {
    // this.$eventBus.$on("searchList", this.searchList);
  },
  mounted() {
    this.geolocate();
    this.searchList();
  },

  methods: {
    // receives a place object via the autocomplete component
    searchList() {
      this.markers = []; //검색 할 때마다 마커 초기화
      this.lists = []; //식당 리스트 초기화
      const baseURI = "http://219.240.99.118:4000";
      // const baseURI = "http://localhost:4000";
      if (this.currentPlace) {
        //위치 검색 시 이 부분 실행
        this.$http
          .get(
            //식당 데이터 가져오는 부분
            `${baseURI}/otdr?lat=` +
            this.currentPlace.geometry.location.lat() + //검색한 좌표 주변으로
              `&lng=` +
              this.currentPlace.geometry.location.lng()
          )
          .then(result => {
            this.lists = result.data; //리스트에 데이터 저장
            console.log("searchList(): ", result.data);

            //마커그리기
            for (var i = 0; i < result.data.length; i++) {
              //해당 좌표 주변 식당 개수만큼 반복하며 마커 입력
              const marker = {
                //마커를 그릴 식당 좌표
                lat: parseFloat(result.data[i].restrLat),
                lng: parseFloat(result.data[i].restrLng)
              };
              this.markers.push({
                //마커입력
                position: marker, //마커 위치
                name: result.data[i].restrName, //식당 이름
                description: result.data[i].restrInfo, //식당 소개
                tableinfo: "남은좌석 : " + result.data[i].usableTable //식당 남은 좌석
              });
            }

            this.places.push(this.currentPlace); //검색 시 검색한 좌표로 이동
            this.center = {
              lat: this.currentPlace.geometry.location.lat(),
              lng: this.currentPlace.geometry.location.lng()
            };
            this.currentPlace = null;
            this.geolocate();
          });
      } else {
        //초기 화면 진입 시 실행되는 코드
        this.$http
          .get(
            `${baseURI}/otdr?lat=` + this.center.lat + `&lng=` + this.center.lng //현재 위치주면 식당 정보 가져오기
          )
          .then(result => {
            this.lists = result.data;
            console.log("초기 화면 진입 시 실행되는 코드 ", result.data);
            this.$eventBus.$emit("searchList", this.lists);

            for (var i = 0; i < result.data.length; i++) {
              //식당 개수만큼 반복
              const marker = {
                //마커 좌표
                lat: parseFloat(result.data[i].restrLat),
                lng: parseFloat(result.data[i].restrLng)
              };
              this.markers.push({
                position: marker, //식당 위치
                name: result.data[i].restrName, //식당이름
                description: result.data[i].restrInfo, //식당소개
                tableinfo: "남은좌석 : " + result.data[i].usableTable //사용가능 테이블 수
              });
            }
          });
      }
    },
    setPlace(place) {
      //검색시 검색된 좌표 저장
      this.currentPlace = place;
    },

    clickMarker(marker, index) {
      //마커 클릭 이벤트 처리 infowindow 팝업
      this.infoWindowPos = marker.position; //팝업될 인포윈도우 마커위치
      this.infoContent = this.getInfoWindowContent(marker); //인포윈도우 이미지 가져오기

      if (this.currentMidx == index) {
        //눌렀던 마커 다시누른것인지 확인
        this.infoWinOpen = !this.infoWinOpen; //다시누르면 인포윈도우 닫음
      } else {
        this.infoWinOpen = true;
        this.currentMidx = index;
      }
    },
    getInfoWindowContent: function(marker) {
      //인포윈도우 이미지
      return `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>
    <div class="content">
      ${marker.description}
    </div>
     <div class="table">
      ${marker.tableinfo}
    </div>
  </div>
</div>`;
    },
    geolocate: function() {
      //첫화면 center 설정
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>