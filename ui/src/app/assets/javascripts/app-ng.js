import angular from 'angular';

class DemoService{
    sayHi(){
        console.log('hi');
    }
}

var angularJSModule = angular.module('app-angular-js', ['core']).service('demoservice', DemoService);
export default angularJSModule;