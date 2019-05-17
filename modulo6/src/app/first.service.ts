import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  fireAlert(message: string) {
    alert(message);
  }
}
