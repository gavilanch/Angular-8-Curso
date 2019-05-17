import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-demo',
  templateUrl: './get-demo.component.html',
  styleUrls: ['./get-demo.component.css']
})
export class GetDemoComponent implements OnInit {
  notFound = false;
  user: User

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUser(userId: string) {
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI : User) => {
      this.user = userFromTheAPI;
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

}
