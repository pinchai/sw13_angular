import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Slider } from './slider/slider';
import { ProductCard } from './product-card/product-card';
import { FormsModule } from '@angular/forms';
import { Product } from './services/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Slider, ProductCard, FormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(
    public products: Product,
    private cdr: ChangeDetectorRef,
  ) {}

  product_list: any = [];
  async ngOnInit() {
    this.product_list = await this.products.getProducts();
    this.cdr.detectChanges();
  }
}
