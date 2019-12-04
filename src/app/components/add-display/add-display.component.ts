import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-display',
  templateUrl: './add-display.component.html',
  styleUrls: ['./add-display.component.scss']
})
export class AddDisplayComponent implements OnInit {
  @Input() restaurant;

  constructor() { }

  ngOnInit() {
  }

}
