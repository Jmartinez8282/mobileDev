import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Station } from '../station';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
  apiURL2 = 'http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig=24th&key=MW9S-E7SL-26DU-VV8V&json=y'

  bartApiInfo;



  private station: Station[] = [];

  constructor(private http: HttpClient) {  }

  getURL(apiURL: string): Observable<any> {
    return this.http.get(apiURL);
  }

  parseStations() {
    this.bartApiInfo = this.http.get<any>(this.apiURL);

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
          this.station.push(info);
        }
        console.log(this.station)
      });
  }
  getDataS(): Station[] {
    return this.station;
  }

}
