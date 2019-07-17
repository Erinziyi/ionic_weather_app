import { WeatherService } from "./../../services/weather.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-weather-detail",
  templateUrl: "./weather-detail.page.html",
  styleUrls: ["./weather-detail.page.scss"]
})
export class WeatherDetailPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: WeatherService
  ) {}

  ngOnInit() {}
}
