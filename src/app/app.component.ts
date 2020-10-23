import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notebook';
  
  lineOne = '';
  alert:boolean = false;
  
  constructor() {
    
  }
  

  submit(){
    localStorage.setItem('Line One', this.lineOne);
    this.alert = true;
  }
}
