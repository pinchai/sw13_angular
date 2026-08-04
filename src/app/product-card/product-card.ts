import { Component, Input } from '@angular/core';
import { ToKhrPipe } from '../pipes/to-khr-pipe';

@Component({
  selector: 'app-product-card',
  imports: [ToKhrPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  protected readonly parseFloat = parseFloat;
}
