import {appModule} from "./app.module";

//preload images
appModule.controller('MyCtrl', ['$scope', 'ImageLoader', function ($scope, ImageLoader) {
    var myImagesList = [
        './img/player_dead.png',
        './img/visited.png'
    ];

    // List of strings
    ImageLoader.loadImages(myImagesList).then(function (loadedStrings) {
        console.log("pre-fetched!");
    });
}]);

angular.bootstrap(document, [
    appModule.name
]);





