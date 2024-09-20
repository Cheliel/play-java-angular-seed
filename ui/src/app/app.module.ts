import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Inject, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouteExampleComponent } from './route-example/route-example.component';

import { AppService } from './app.service';
import { AppHttpInterceptorService } from './http-interceptor.service';
import { UpgradeComponent, UpgradeModule, downgradeModule, downgradeComponent } from '@angular/upgrade/static';
import angular from 'angular';
import angularJS_app from './assets/javascripts/angular-js/angular-js.component';
import angularJSModule from './assets/javascripts/app-ng';


//angular.bootstrap(document.body, ['app-angular-js'], { strictDi: true });

const routes: Routes = [
  {
    path: 'java',
    component: RouteExampleComponent,
    data: { technology: 'Java' }
  },
  {
    path: 'play',
    component: RouteExampleComponent,
    data: { technology: 'Play' }
  },
  {
    path: 'angular',
    component: RouteExampleComponent,
    data: { technology: 'Angular' }
  },
  {
    path: '**',
    redirectTo: '/play',
    pathMatch: 'full'
  }
];

@NgModule({
 // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
   AppComponent,
   RouteExampleComponent,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Csrf-Token',
      headerName: 'Csrf-Token',
    }),
   RouterModule.forRoot(routes),
  ],
  providers: [
    AppService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService
    }
  ],
  entryComponents: [AppComponent],
  //bootstrap: [AppComponent]
})



export class AppModule implements DoBootstrap  {
//  constructor(private upgrade: UpgradeModule) { }
//  ngDoBootstrap() {
//    this.upgrade.bootstrap(document.body, ['app-angular-js'], { strictDi: true });
//  }
  constructor(private upgrade: UpgradeModule){}
 //   const angularInjector = $injector.get('$$angularInjector');
 //   console.log(angularInjector);
    ngDoBootstrap(app: ApplicationRef) {
      this.upgrade.bootstrap(document.body, [angularJSModule.name], { strictDi: true });
      app.bootstrap(AppComponent);
    }
 
}

//@Inject("%injector") %injector

//platformBrowserDynamic().bootstrapModule(AppModule);
