import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scenes } from '../scenes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myUrl = 'https://spreadsheets.google.com/feeds/list/1c36umalUF5VfQZS-1PC0o_8XJoiip8uWiRlGiDf7R4k/1/public/full?alt=json'
  googleSheet;
  private scenes: Scenes[] = [];
  private audio = new Audio();
  constructor(private http: HttpClient) {
    this.parseData();
    this.loadMusic();
  }
  //Retrieve data from google sheet
  parseData() {
    this.googleSheet = this.http.get(this.myUrl);
    this.googleSheet.subscribe(
      x => {
        console.log(x)

        for (let s of x.feed.entry) {
          const info: Scenes = {

            id: s.gsx$id.$t as number,
            scene: s.gsx$scene.$t,
            choice1: s.gsx$choice1.$t,
            choice2: s.gsx$choice2.$t,
            result1: s.gsx$result1.$t,
            result2: s.gsx$result2.$t,
            ending: s.gsx$ending.$t as boolean
          }
          this.scenes.push(info);
        }

      }

    );

  }
  //get us the next scene by the value being passsed into the function
  getNextScene(id: number): Scenes {

    //you might have to minus 1 if you start at 1
    return this.scenes[id - 1];
  }

  getFirstScene(): Scenes {
    return this.scenes[0];
  }

  getData() {
    return this.http.get<any>(this.myUrl);
  }

  loadMusic() {
    this.audio.src = 'assets/bmusic.mp3';
    this.audio.load();
  }

  playMusic() {
    this.audio.play();
  }
}
