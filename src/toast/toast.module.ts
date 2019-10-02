import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: [ToastComponent],
  exports:[ToastComponent],
  providers: [ToastService]
})
export class ToastModule { }