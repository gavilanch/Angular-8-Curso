import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarHaciaUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
