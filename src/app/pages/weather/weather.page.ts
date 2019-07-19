import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.page.html",
  styleUrls: ["./weather.page.scss"]
})
export class WeatherPage implements OnInit {
  weathers;
  city;
  place;

  constructor(
    private weatherService: WeatherService,
    private geolocation: Geolocation,
    private router: Router
  ) {}

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.weatherService
          .getWeatherByGeo(resp.coords.longitude, resp.coords.latitude)
          .subscribe(resp => {
            console.log(resp);
            this.weathers = resp["list"];
            this.place = resp["city"];
          });
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  setFilteredItems() {
    this.weatherService.getWeathers(this.city).subscribe(resp => {
      console.log(resp);
      this.weathers = resp["list"];
      this.place = resp["city"];
    });
  }

  openDetail(weather) {
    this.router.navigate([
      `weather-detail/${weather["dt"]}/${this.place.name}`
    ]);
  }
}
