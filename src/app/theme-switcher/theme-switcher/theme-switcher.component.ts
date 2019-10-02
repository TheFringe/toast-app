import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styleUrls: ["./theme-switcher.component.css"]
})
export class ThemeSwitcherComponent implements OnInit {
  themeColor = "light-theme";
  checked:false;
  constructor() {}

  ngOnInit() {
    this.setDefaultTheme();
  }

  setDefaultTheme() {
    // if theme is stored in storage - use it

    if (localStorage.getItem("pxTheme")) {
      //set theme color to one from storage
      this.themeColor = localStorage.getItem("pxTheme");

      //add that class to body
      const body = document.getElementsByTagName("body")[0];
      body.classList.add(this.themeColor);
    }
  }

  themeSwitcher() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove(this.themeColor);

    // switch theme
    this.themeColor =
      this.themeColor === "light-theme" ? "dark-theme" : "light-theme";

    body.classList.add(this.themeColor);

    //save it to local storage

    localStorage.setItem("pxTheme", this.themeColor);
  }
}
