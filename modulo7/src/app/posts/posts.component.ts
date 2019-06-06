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
    this.route.paramMap.subscribe(params => {
      if (params.has("id")){
        this.webApiService.obtenerPostsPorUsuario(params.get("id")).subscribe(posts => this.posts = posts);
      } else{
        this.webApiService.obtenerPosts().subscribe(posts => this.posts = posts);
      }
    })
  }

  navegarHaciaUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
