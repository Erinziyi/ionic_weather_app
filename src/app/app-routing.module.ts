import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "weather", pathMatch: "full" },
  {
    path: "weather",
    loadChildren: "./pages/weather/weather.module#WeatherPageModule"
  },
  {
    path: "weather-detail/:timestamp/:city",
    loadChildren:
      "./pages/weather-detail/weather-detail.module#WeatherDetailPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
