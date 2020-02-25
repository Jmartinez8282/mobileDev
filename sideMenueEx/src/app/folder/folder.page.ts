import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {




  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private dataS: UserService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.folder);
    const url = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${this.folder}=MW9S-E7SL-26DU-VV8V&json=y`
    
    //this.getStationData(url);
  }

}
