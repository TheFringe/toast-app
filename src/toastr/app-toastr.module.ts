import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToastrService } from './app-toastr.service';
import { ToastrComponent } from './toastr/toastr.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [ToastrComponent],
  providers: [AppToastrService],
  exports:[ToastrComponent]
})
export class AppToastrModule { }