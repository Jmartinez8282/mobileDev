import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './api/user.service';
import { HttpClient } from '@angular/common/http';
import { Station } from './station';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public selectedIndex = 0;
  public appPages = [];
  bartApiInfo;
  
 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private uServe: UserService,
    private http:HttpClient
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.parseStations();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  parseStations() {
    this.bartApiInfo = this.http.get<any>("http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y");
    this.bartApiInfo.subscribe(
      x => {
        console.log(x)

        for (let s of x.root.stations.station) {
          const info: Station = {
            abbr: s.abbr,
            title: s.city,
            url: 'folder/'+s.abbr,
            county: s.county,
          }
          this.appPages.push(info);
        }
        console.log(this.appPages)
      });
  }
}
