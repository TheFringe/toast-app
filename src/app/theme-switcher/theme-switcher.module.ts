import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [CommonModule, MatSlideToggleModule, BrowserAnimationsModule],
  exports: [ThemeSwitcherComponent],
  declarations: [ThemeSwitcherComponent]
})
export class ThemeSwitcherModule {}
