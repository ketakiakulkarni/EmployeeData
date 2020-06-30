import { Component, OnInit } from '@angular/core';
import { RemoteService } from './remote.service';
import { App } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app=new App()
  userdata:Array<App>=new Array()

  title = 'AngularApplication';
  
  obj={}
  constructor(private remote:RemoteService){
  }

  handleFetch(){
    this.remote.fetchData("https://reqres.in/api/users?page=2").subscribe(
      (value)=>{ this.obj = value['data']},
      (err)=>{console.log(err)},
      ()=>{console.log("in Complete")}
   )
  }

  handleSend()
  {
    this.userdata.push(this.app);
      this.app=new App();
      this.remote.sendData("https://reqres.in/api/users/2",this.userdata).subscribe(
      (value)=>{this.userdata},
      (err)=>{console.log(err)}
      )
  }
}
