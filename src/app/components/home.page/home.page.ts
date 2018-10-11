import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePageComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit() {
  }

}
