import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under.construction.html',
  styleUrls: ['./under.construction.css']
})
export class UnderConstructionComponent implements AfterViewInit {
  title = 'Under Construction!';
  underConstructionImage: string;

  constructor(private elementRef: ElementRef) {
    this.underConstructionImage = './assets/under_construction.png';
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8E2AD2';
  }

}
