import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Slider } from './slider/slider';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Slider, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: any[] = [
    {
      id: 1,
      image: '1.png',
      name: 'Tomodachi Life™: Living the Dream',
      description:
        'Live the dream in Tomodachi Life, a life simulation game for Nintendo 3DS. Create your own Mii characters and watch them interact with each other in hilarious ways.',
      price: '59.99',
    },
    {
      id: 2,
      image: '2.png',
      name: 'Xenoblade Chronicles™ X: Definitive Edition – Nintendo Switch™ 2 Edition',
      description:
        'Xenoblade Chronicles X: Definitive Edition is an enhanced version of the critically acclaimed open-world RPG for Nintendo Switch. Explore a vast alien world, engage in epic battles, and uncover the mysteries of Mira.',
      price: '64.99',
    },
    {
      id: 3,
      image: '3.png',
      name: 'Pokémon™ Champion',
      description:
        'Pokémon Champion is the ultimate Pokémon game for Nintendo Switch. Train your Pokémon, battle other trainers, and become the champion of the Pokémon world.',
      price: '00.00',
    },
    {
      id: 4,
      image: '4.png',
      name: 'Super Mario Bros.™ Wonder – Nintendo Switch™ 2 Edition + Meetup in Bellabel Park',
      description:
        'Classic Mario gameplay is turned on its head with Wonder Flowers in the Super Mario Bros. Wonder game!',
      price: '79.99',
    },
  ];
}
