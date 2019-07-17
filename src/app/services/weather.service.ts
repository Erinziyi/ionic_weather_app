import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Typescript custom enum for search types (optional)

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  // url =
  //   "https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2";
  // apiKey = "9fd7a449d055dba26a982a3220f32aa2"; // <-- Enter your own key here!

  constructor(public httpClient: HttpClient) {}

  getWeathers(city) {
    return this.httpClient.get(
      "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        city +
        "&cnt=10&appId=9fd7a449d055dba26a982a3220f32aa2"
    );
  }
}
