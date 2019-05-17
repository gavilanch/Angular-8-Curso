import { Component, OnInit } from '@angular/core';
import { compare } from 'fast-json-patch';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-http-patch-demo',
  templateUrl: './http-patch-demo.component.html',
  styleUrls: ['./http-patch-demo.component.css']
})
export class HttpPatchDemoComponent implements OnInit {

  users: User[];
  model: User;
  originalUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((usersFromAPI: User[])=> {
      this.users = usersFromAPI;
      this.model = Object.assign({}, this.users[0]);
      this.originalUser = this.users[0];
    });
  }

  selectUser(user: User){
    this.model = Object.assign({}, user);
    this.originalUser = user;
  }

  onSubmit(){
    const patch = compare(this.originalUser, this.model);
    console.log(patch);
    this.userService.patchUser(this.model.id, patch)
    .subscribe(response => console.log(response));
  }

}
