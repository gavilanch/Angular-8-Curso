import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-get-list-demo',
  templateUrl: './get-list-demo.component.html',
  styleUrls: ['./get-list-demo.component.css']
})
export class GetListDemoComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersWithHeaders().subscribe((response: any) => {
      console.log(response);
      this.users = response.body
    }, error => console.error(error));
  }

}
