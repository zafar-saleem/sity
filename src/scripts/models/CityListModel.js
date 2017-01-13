let _url = 'http://citysdk.dmci.hva.nl/CitySDK/events/search?category=festival';

const CityListModel = {

    get: () => {
        return new Promise((resolve, reject) => {
            let request = null;

            if (window.XMLHttpRequest) {
                request = new window.XMLHttpRequest();
            } else if (window.ActiveXObject) {
                request = new window.ActiveXObject('Microsoft.XMLHTTP');
            }

            request.open('GET', _url);

            request.onload = () => {
                if (request.status === 200) {
                    resolve(JSON.parse(request.response));
                } else {
                    reject(new Error(request.statusText));
                }
            };

            request.onerror = () => {
                reject(new Error('Network Error'));
            };

            request.send();
        });

    }

};

module.exports = CityListModel;

