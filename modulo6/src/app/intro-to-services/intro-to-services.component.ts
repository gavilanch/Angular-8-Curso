import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-intro-to-services',
  templateUrl: './intro-to-services.component.html',
  styleUrls: ['./intro-to-services.component.css']
})
export class IntroToServicesComponent implements OnInit {

  constructor(private firstService: FirstService) { }

  ngOnInit() {
  }

  handleClick(){
    this.firstService.fireAlert('I have been clicked');
  }

}
