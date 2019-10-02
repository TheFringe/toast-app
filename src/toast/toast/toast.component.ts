import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ToastService } from "./toast.service";
import { Message } from "./message";
@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.css"]
})
export class ToastComponent implements OnInit {
  constructor(private snackBar: MatSnackBar, private ts: ToastService) {
    ts.messageStream.subscribe({
      next: (resp: Message) => {
        this.snackBar.open(resp.message, resp.type.toString(), {
          duration: 4000
        });
      }
    });
  }

  ngOnInit() {}
}
