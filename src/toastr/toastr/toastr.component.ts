import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AppToastrService } from "../app-toastr.service";
import { Message } from "./message";
import { MessageType } from "./message-type.enum";
@Component({
  selector: "app-toastr",
  templateUrl: "./toastr.component.html",
  styles: []
})
export class ToastrComponent implements OnInit {
  constructor(toastr: ToastrService, ts: AppToastrService) {
    ts.messageStream.subscribe({
      next: (resp: Message) => {
        switch (resp.type) {
          case MessageType.Error: {
            toastr.error(resp.message, null, {
              disableTimeOut: true,
              closeButton: true,
              timeOut: 10000
            });
            break;
          }
          case MessageType.Warning: {
            toastr.warning(resp.message);
            break;
          }
          case MessageType.Info: {
            toastr.show(resp.message);
            break;
          }
          case MessageType.Success: {
            toastr.success(resp.message);
            break;
          }
        }
      }
    });
  }

  ngOnInit() {}
}
