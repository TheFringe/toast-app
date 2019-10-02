import { Component } from '@angular/core';
import {ToastService} from '../toast/toast/toast.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

constructor(private ts:ToastService){

}
  sendError(){
    this.ts.addError("Jag är ett fel!");
  }
  sendInfo(){
    this.ts.addInfo("Jag är Info!");
  }
  sendWarning(){
    this.ts.addWarning("Jag är en varning!");
  }
  sendSuccess(){
    this.ts.addSuccess("Jag är lyckad!");
  }
}
