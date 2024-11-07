let myMap;

const init = () => {
    myMap =new ymaps.Map("map",{
        center:  [59.96119703073175,30.322017782034436],
        zoom: 11,
        controls: []
    });

const coords = [
    [59.954037299788446,30.365397868007836],
    [59.98183432435636,30.361964640468752],
    [59.94878507895935,30.24454825863283]
];
const myCollection = new ymaps.GeoObjectCollection({}, {
    draggble: false,
    iconLayout: 'default#image',
    iconImageHref:"./mark.png",
    iconImageSize: [60, 57],
    iconImageOffset: [-26, -46]
});
coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
})
myMap.geoObjects.add(myCollection);

// myMap.behaviors.disable('scrollZoom');
}
ymaps.ready(init);