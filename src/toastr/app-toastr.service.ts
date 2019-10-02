import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Message } from "./toastr/message";
import { MessageType } from "./toastr/message-type.enum";

@Injectable()
export class AppToastrService {
  private subject = new Subject<Message>();
  public messageStream = this.subject.asObservable();

  constructor() {}

  public addError(message: string) {
    this.subject.next({ message: message, type: MessageType.Error });
  }

  public addInfo(message: string) {
    this.subject.next({ message: message, type: MessageType.Info });
  }

  public addWarning(message: string) {
    this.subject.next({ message: message, type: MessageType.Warning });
  }

  public addSuccess(message: string) {
    this.subject.next({ message: message, type: MessageType.Success });
  }
}
