import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Scenes } from '../scenes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  displayScene: Scenes;

  constructor(private dService:DataService,private router: Router,) { }

  ngOnInit() {

    //getting the first scene
    this.displayScene = this.dService.getFirstScene();
  }
  nextScene(id){
console.log(id);
if(this.displayScene.ending === true){
  
    this.router.navigate(['ending']);
  
}else{
  this.displayScene = this.dService.getNextScene(id);
}

  }

}
