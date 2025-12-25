window.onload = function () {
    var schoolPosition = new kakao.maps.LatLng(37.5665, 126.9780);

    var map = new kakao.maps.Map(
        document.getElementById('map'),
        {
            center: schoolPosition,
            level: 4
        }
    );

    new kakao.maps.Marker({
        map: map,
        position: schoolPosition
    });
};

// 장애인 도움 시설 데이터
var facilities = [
    {
        name: "○○ 장애인 복지관",
        desc: "휠체어 접근 가능 · 상담 지원",
        position: new kakao.maps.LatLng(37.5672, 126.9795)
    },
    {
        name: "△△ 재활 센터",
        desc: "물리치료 · 재활 프로그램",
        position: new kakao.maps.LatLng(37.5658, 126.9772)
    }
];

var markers = [];

// 마커 + 인포윈도우
facilities.forEach(function(facility) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: facility.position
    });

    var info = new kakao.maps.InfoWindow({
        content: `
            <div style="padding:5px;font-size:12px;">
                <strong>${facility.name}</strong><br>
                ${facility.desc}
            </div>
        `
    });

    kakao.maps.event.addListener(marker, 'click', function () {
        info.open(map, marker);
    });

    markers.push({ marker, info });
});

// 목록 클릭 시 이동
function moveTo(index) {
    var target = facilities[index].position;
    map.setCenter(target);
    markers[index].info.open(map, markers[index].marker);
}
