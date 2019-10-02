import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ToastModule } from "../toast/toast.module";
import { AppToastrModule } from "../toastr/app-toastr.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThemeSwitcherModule } from "./theme-switcher/theme-switcher.module";

@NgModule({
  imports: [
    BrowserModule,
    ThemeSwitcherModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ToastModule,
    AppToastrModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
