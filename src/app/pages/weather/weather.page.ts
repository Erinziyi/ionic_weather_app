import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.page.html",
  styleUrls: ["./weather.page.scss"]
})
export class WeatherPage implements OnInit {
  weathers;
  city;
  selectedWeather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  setFilteredItems() {
    this.weatherService.getWeathers(this.city).subscribe(resp => {
      console.log(resp);
      this.weathers = resp["list"];
    });
  }
}
