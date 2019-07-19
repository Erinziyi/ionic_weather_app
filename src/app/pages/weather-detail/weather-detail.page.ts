import { WeatherService } from "./../../services/weather.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-weather-detail",
  templateUrl: "./weather-detail.page.html",
  styleUrls: ["./weather-detail.page.scss"]
})
export class WeatherDetailPage implements OnInit {
  city;
  weather;
  constructor(
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    let timestamp = this.activatedRoute.snapshot.paramMap.get("timestamp");
    this.city = this.activatedRoute.snapshot.paramMap.get("city");
    this.weather = this.weatherService.getWeatherByTimestamp(timestamp);
  }
}
