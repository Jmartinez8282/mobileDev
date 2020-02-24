import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  apiURL = ' http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
  apiURL2 = ' http://api.bart.gov/api/sched.aspx?cmd=depart&orig=ASHB&dest=CIVC&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1&json=y'

        
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,private dataS:UserService ) { }

  ngOnInit() {
    this.dataS.getURL(this.apiURL).subscribe(
      x => {console.log(x);
      }
    );
    this.dataS.getURL(this.apiURL2).subscribe(
      x => {console.log(x);
      }
    );
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
