import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  data = new Array()

  constructor() { }


  onGetText(text) {
    this.data.push(text.value)
    text.value = '';
    console.log(this.data);
  }

  delete(text) {
    this.data.splice(this.data.indexOf(text), 1);
    // tslint:disable-next-line:quotemark
    console.log("deleted " + text);
  }

  submit(form)
  {
    console.log(form)
  }
}
