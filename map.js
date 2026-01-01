window.onload = function () {
    var schoolPosition = new kakao.maps.LatLng(37.6435616, 127.2993351);

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

function moveTo(index) {
    var target = facilities[index].position;
    map.setCenter(target);
    markers[index].info.open(map, markers[index].marker);
}



