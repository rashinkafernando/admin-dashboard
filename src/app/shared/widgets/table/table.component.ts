import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() displayedColumns : any = [];
  @Input() dataSource : any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
