import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherTemp :any
  todayDate = new Date()
  cityName :any
  constructor(public httpClient:HttpClient) {
    this.loadData();
  }

    loadData(){
      this.httpClient.get(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`).subscribe(results =>{
        console.log(results);
        this.weatherTemp = results['main']
        this.cityName = results['name']
        console.log(this.weatherTemp);
        
      
      })
    }
  }


