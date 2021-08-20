import { Component } from '@angular/core';

declare const OktaWidget: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okta-siw-hibp-check';


  ngOnInit(){
    //RemoveLoginWidget(); 
    OktaWidget();
    
  }
}

