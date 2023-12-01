import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component  implements OnInit {

  @Input() public childata: any;
  constructor() {

  }
  ngOnInit(): void {

  }
}
