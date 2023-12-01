import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'secpnd-app';
  public trsdt: string = 'appcomp data';
  public childdata: string = '';
  public ipval: any = '';
  constructor() {
    
  }

  ngOnInit(): void {

  }
  getChilddata(d: string) {
    this.childdata = d;
  }
  printText(event: any) {
    this.ipval = event.target.value;
  }
}
