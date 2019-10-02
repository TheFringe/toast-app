import { Component } from '@angular/core';
import {ToastService} from '../toast/toast.service';
import {AppToastrService} from '../toastr/app-toastr.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

constructor(private ts:ToastService, private appTs:AppToastrService){

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

  sendError2(){
    this.appTs.addError("Jag är ett fel!");
  }
  sendInfo2(){
    this.appTs.addInfo("Jag är Info!");
  }
  sendWarning2(){
    this.appTs.addWarning("Jag är en varning!");
  }
  sendSuccess2(){
    this.appTs.addSuccess("Jag är lyckad!");
  }
}
