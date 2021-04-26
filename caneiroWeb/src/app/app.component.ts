import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app-media.component.css']
})
export class AppComponent {
  title = 'caneiroWeb';
  isOpen:boolean = false;

  open(){
    this.isOpen = !this.isOpen;
  }

  goToElement(el :HTMLElement){
    el.scrollIntoView({behavior:"smooth"});
  }

}
