import { Component, Inject } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  postRequestResponse: string;

  constructor(private appService: AppService, @Inject("$injector") $injector) {
    $injector.get('demoservice').sayHi();
    $injector.get('demoservice').sayMultiplHi("AngularJS");
    this.appService.getWelcomeMessage().subscribe((data: any) => {
      this.title = data.content;
    });
  }

  /**
   * This method is used to test the post request
   */
  public postData(): void {
    this.appService.sendData().subscribe((data: any) => {
      this.postRequestResponse = data.content;
    });
  }
}
