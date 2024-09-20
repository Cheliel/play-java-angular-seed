
import angularJSModule from "../app-ng";
const angularJS_app = angularJSModule.component("angular-js-component", {
    templateUrl: "/angular-js.component.html",
    bindings: {},
    controller: ['$timeout', angularJSCtrl],
    controllerAs: 'AngularJSctrl'
});

// https://docs.angular.lat/api/upgrade/static/UpgradeComponent
// https://www.monterail.com/blog/angularjs-vs-angular-migration

function angularJSCtrl($timeout){

    var kangularJS = this;
    console.log("var kangularJS = this;");
}

export default angularJS_app;
