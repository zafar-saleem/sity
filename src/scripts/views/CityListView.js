import ItemTemplate from '../../templates/ItemTemplates.handlebars';
import GoogleMapsLoader from 'google-maps';

let _model, _cityItem, _id;
let _location = {};
let $container = document.querySelector('.container');
let $item = document.querySelector('.items');

GoogleMapsLoader.KEY = 'AIzaSyCkiPOgV6ekxgafkzc9UzoyUaAHL4yW2_M';

const CityListView = {

    init: (model) => {
        _model = model;

        setProperties();
    }
};

function setProperties() {
    setPageTitle();

    _model.get().then((response) => {
        response.event.forEach((item, index) => {
            _location['lat'] = Number(item.location.point[0].Point.posList.split(' ')[0]);
            _location['lng'] = Number(item.location.point[0].Point.posList.split(' ')[1]);

            _cityItem = item;
            _id = item.id;

            render().then((response) => {
                GoogleMapsLoader.load((google) => {
                    let map = new google.maps.Map(document.getElementById(item.id), {
                        center: _location,
                        zoom: 12,
                        scrollwheel: false
                    });
                });
            });
        });
    });
}

function setPageTitle() {
    let pageTitle = 'Events in Amsterdam';
    let $title = document.createElement('h3');

    $title.classList.add('header');

    $title.append(pageTitle);

    $container.append($title);
}

function render() {
    if (_cityItem.description[1].value.length > 220) {
        _cityItem.description[1].value = _cityItem.description[1].value.substring(0, 220) + '...';
    }

    return new Promise((resolve, reject) => {
        $item.insertAdjacentHTML('beforeend', ItemTemplate(_cityItem));
        resolve();
    });
}

module.exports = CityListView;

