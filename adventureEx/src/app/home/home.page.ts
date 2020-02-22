import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //myScenes =[];

  constructor(private dService: DataService, private menu: MenuController, ) {
    dService.getData().subscribe;
    this.playMusic();
    //(x => {console.log (x.feed.entry);
    //for (let s of x.feed.entry){
    //let d = {
    //scene: s.gsx$scene.$t,
    //option: s.gsx$choice1.$t
    //}
    //this.myScenes.push(d);
    //console.log(this.myScenes)
    // }
    //});
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  playMusic() {
    this.dService.playMusic();
  }

}


