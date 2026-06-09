import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [JsonPipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() nameList: any[] = [];
}
