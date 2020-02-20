import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   url = 'https://spreadsheets.google.com/feeds/list/1c36umalUF5VfQZS-1PC0o_8XJoiip8uWiRlGiDf7R4k/1/public/full?alt=json'
  constructor(private http:HttpClient) { }
  getData(){
return this.http.get(this.url);
  }
}
