let myMap;

const init = () => {
    myMap =new ymaps.Map("map",{
        center:  [59.93957524846415,30.280041982803287],
        zoom: 17,
        controls: []
    });
const coords = [
    [59.93957524846415,30.280041982803287],
];
const myCollection = new ymaps.GeoObjectCollection({}, {
    draggble: false,
    iconLayout: 'default#image',
    iconImageHref:"images/mark.png",
    iconImageSize: [35, 45],
    iconImageOffset: [0, 0]
});
coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
})
myMap.geoObjects.add(myCollection);

// myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);