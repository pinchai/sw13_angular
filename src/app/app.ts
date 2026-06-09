import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Slider } from './slider/slider';
import { ProductCard } from './product-card/product-card';
import { Table } from './table/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Slider, ProductCard, Table, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name_list: any[] = [];
  name: string = '';
  age: number = 0;
  onSave() {
    this.name_list.push(
      {
        name: this.name,
        age: this.age,
      }
    )

    console.log(this.name_list);
  }
}
