import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-practice',
  templateUrl: './button-practice.component.html',
  styleUrls: ['./button-practice.component.css']
})
export class ButtonPracticeComponent implements OnInit {

  displayP = true;
  listItems = [];

  constructor() { }

  ngOnInit() {
  }

  buttonClick = () => {
    this.displayP = !this.displayP;

    this.listItems.push(new Date());
  } 
}
