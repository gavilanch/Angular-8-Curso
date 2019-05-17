import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-http-post-demo',
  templateUrl: './http-post-demo.component.html',
  styleUrls: ['./http-post-demo.component.css']
})
export class HttpPostDemoComponent implements OnInit {

  model: User = {id: 0, name: '', username: ''};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.model);
    this.userService.createUser(this.model).subscribe((response: User) => console.log(response));
  }

}
