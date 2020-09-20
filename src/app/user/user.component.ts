import { Component } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  countries = ['United States' , 'Singapore','Hong-Kong','Australia'];
  model = new User('','','');
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
