import CityListModel from './scripts/models/CityListModel';
import CityListView from './scripts/views/CityListView';

CityListView.init(CityListModel);
/*
document.addEventListener('DOMContentLoaded', () => {
    let jsFile = document.createElement('script');
    jsFile.type = 'text/javascript';
    jsFile.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCkiPOgV6ekxgafkzc9UzoyUaAHL4yW2_M';
    document.getElementsByTagName('head')[0].appendChild(jsFile);
});
*/
