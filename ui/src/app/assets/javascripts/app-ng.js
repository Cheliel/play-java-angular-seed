import angular from 'angular';

class DemoService{
    sayHi(){
        console.log('hi');
    }
}

var angularJSModule = angular.module('app-angular-js', []).service('demoservice', DemoService);
export default angularJSModule;
