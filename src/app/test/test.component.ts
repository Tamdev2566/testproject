import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  @Input() public data2: any;
  @Input() public inputval: any;
  @Output() public returnData = new EventEmitter();
  public strt: string = 'testcomponent data';
  constructor() {}
  ngOnInit(): void {}

  sendData = () => {
    this.returnData.emit(this.strt);
  };
}
