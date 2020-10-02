import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textsample',
  templateUrl: './textsample.component.html',
  styleUrls: ['./textsample.component.css']
})
export class TextsampleComponent implements OnInit {

  disabled: boolean = true;

  value1: string;

  value2: string;

  value3: string;

  value4: string;

  value5: string = 'Disabled';

  constructor() { }

  ngOnInit(): void {
  }

}
