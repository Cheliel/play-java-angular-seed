import angular from 'angular';
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { getAngularJSGlobal } from '@angular/upgrade/static';
//import { angularJS_component } from './angular-js/angular-js.component';
import { UpgradeModule } from '@angular/upgrade/static';

class DemoService{
    sayHi(){
        console.log('hi');
    }

    sayMultiplHi(word){
        for(let i = 0; i < 12; i++){
            console.log(i);
            console.log(word);
        }
    }
}




// https://docs.angular.lat/api/upgrade/static/UpgradeComponent
// https://www.monterail.com/blog/angularjs-vs-angular-migration

var angularJSModule = angular.module('app-angular-js', [])
.service('demoservice', DemoService)
.component('angularJsComponent', {
  transclude: true,
  template:`<p>hello angularjs</p>`
});



/*.component("angular-js-component", {
    templateUrl: "angular-js/angular-js.component.html",
    bindings: {},
    controller: ['$timeout', angularJSCtrl],
    controllerAs: 'AngularJSctrl'
});*/

export default angularJSModule;
