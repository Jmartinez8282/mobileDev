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
    const url = `asdf;jasd;lkfjasdfl;kj${this.folder}as;kdfhj;alskdjfa;skldfjk`
    //this.getStationData(url);
  }

}
