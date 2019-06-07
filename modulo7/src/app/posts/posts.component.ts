import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApiService } from '../services/web-api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) {}
 
  posts: Post[];

  ngOnInit() {
    this.route.data.subscribe((data: {posts: Post[]}) => {
        this.posts = data.posts;
    });
  }

  navegarHaciaUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
