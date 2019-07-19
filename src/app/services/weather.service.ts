import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

// Typescript custom enum for search types (optional)

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  // url =
  //   "https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2";
  // apiKey = "9fd7a449d055dba26a982a3220f32aa2"; // <-- Enter your own key here!
  weathers; //save data
  constructor(public httpClient: HttpClient) {}

  getWeatherByGeo(long, lat) {
    return this.httpClient
      .get(
        "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
          lat +
          "&lon=" +
          long +
          "&cnt=10&appId=9fd7a449d055dba26a982a3220f32aa2"
      )
      .pipe(
        tap(resp => {
          this.weathers = resp["list"];
        })
      );
  }

  getWeathers(city) {
    return this.httpClient
      .get(
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
          city +
          "&cnt=10&appId=9fd7a449d055dba26a982a3220f32aa2"
      )
      .pipe(
        tap(resp => {
          this.weathers = resp["list"];
        })
      );
  }
  getWeatherByTimestamp(timestamp) {
    for (let i = 0; i < this.weathers.length; i++) {
      console.log(this.weathers);
      if (this.weathers[i]["dt"] == timestamp) {
        return this.weathers[i];
      }
    }
  }
}
