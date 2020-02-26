import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  bartApi;
  times;


  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private dataS: UserService, private http: HttpClient) { }

  ngOnInit() {
  
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    const url = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.folder}&key=MW9S-E7SL-26DU-VV8V&json=y`
    this.parseEtd(url)

    //this.getStationData(url);
  }

  parseEtd(url: string) {
    this.bartApi = this.http.get(url);
    this.bartApi.subscribe(
      x => {
        this.times = x.root.station[0];
        console.log(this.times);
      }
    )
  }

}
