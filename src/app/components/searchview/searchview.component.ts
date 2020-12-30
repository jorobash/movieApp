import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.scss'],
})
export class SearchviewComponent implements OnInit {
  @Input('r') r: any;
  constructor() { }

  ngOnInit() {}

}
