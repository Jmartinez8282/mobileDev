import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Station } from '../station';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = ' http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y'
  apiURL2 = 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=ASHB&dest=CIVC&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1&json=y'
  bartApiInfo;
  
  
  private station: Station[] = [];
  
  constructor(private http:HttpClient) {this.parseStations(); }
  getURL(apiURL:string): Observable<any> {
    return this.http.get<any>(apiURL);
  }
  parseStations() {
    this.bartApiInfo = this.http.get<any>(this.apiURL);
    console.log()
    this.bartApiInfo.subscribe(
      x => {
        console.log(x)

        for (let s of x.root.stations.station) {
          const info: Station= {

         station:s.city,
         city: s.city,
         
            
            
            
            
            
          }
          this.station.push(info);
        }
        console.log(this.station)
        

      }

    );

  }
}
