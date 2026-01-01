var mapContainer = document.getElementById('map');

var mapOption = {
    center: new kakao.maps.LatLng(37.6435616, 127.2993351), 
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var facilities = [
    {
        name: "○○ 장애인 복지관",
        address: "경기도 남양주시 ○○로 123",
        type: "장애인 복지관",
        position: new kakao.maps.LatLng(37.6542, 127.2451)
    },
    {
        name: "△△ 재활 센터",
        address: "경기도 남양주시 △△길 45",
        type: "재활 치료 시설",
        position: new kakao.maps.LatLng(37.6514, 127.2426)
    }
];

var facilityList = document.getElementById("facility-list");

facilities.forEach(function (facility) {

    var marker = new kakao.maps.Marker({
        map: map,
        position: facility.position
    });

    kakao.maps.event.addListener(marker, 'click', function () {

        facilityList.innerHTML = `
          <p>
            <strong>${facility.name}</strong><br>
            주소: ${facility.address}<br>
            시설 유형: ${facility.type}
          </p>
        `;
    });
});
