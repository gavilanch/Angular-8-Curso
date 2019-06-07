import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Post } from './models/post';
import { WebApiService } from './services/web-api.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverGuard implements Resolve<Post[]> {

  constructor(private webApiService: WebApiService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    if (route.paramMap.has('id')){
      return this.webApiService.obtenerPostsPorUsuario(route.paramMap.get('id')).pipe(catchError(err => {
        this.router.navigate(['/usuarios'])
        return EMPTY;
      }))
    } else {
      return this.webApiService.obtenerPosts();
    }
  }

}
