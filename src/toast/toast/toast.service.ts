import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Message} from './message';
import {MessageType} from './message-type.enum';

@Injectable()
export class ToastService {

  private subject = new Subject<Message>();
  public messageStream = this.subject.asObservable();

  constructor() { }

  addError(message:string){
    this.subject.next({message:message, type:MessageType.Error});
  }

}