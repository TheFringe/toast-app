import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ToastModule} from '../toast/toast.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatButtonModule, ToastModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
