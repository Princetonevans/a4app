import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;


  constructor() { console.log('constructor ran..'); }


  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'John Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';
  }
  onClick() {
    this.name = 'Princeton Evans';
    this.hobbies.push('New Hobby')
  }
  addHobby(hobby){
    console.log('hobby');
    this.hobbies.unshift(hobby)
    return false
  }

}

interface Address {
    street:string,
    city:string,
    state:string
}
