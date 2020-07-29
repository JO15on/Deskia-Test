import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jon-olson-intern-test';
  opened: any;
  tablet: Observable<BreakpointState> = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape]);

  showDiv = true;
  showDiv2 = true;
  showDiv3 = true;

  constructor(private breakpointObserver : BreakpointObserver){}

  toggle(){
    this.showDiv = !this.showDiv;
  }

  toggle2(){
    this.showDiv = !this.showDiv;
  }

  toggle3(){
    this.showDiv = !this.showDiv;
  }
}
