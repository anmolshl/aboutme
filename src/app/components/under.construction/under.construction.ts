import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under.construction.html',
  styleUrls: ['./under.construction.css']
})
export class UnderConstructionComponent implements AfterViewInit {
  title = 'Under Construction!';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8E2AD2';
  }

}
