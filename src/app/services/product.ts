import { Injectable } from '@angular/core';
declare const axios: any;

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {}

  async getProducts(): Promise<any[]> {
    const apiUrl: string = 'https://fakestoreapi.com/products';
    let products: any[] = [];

    await axios
      .get(apiUrl)
      .then((response: any) => {
        products = response.data;
      })
      .catch((error: any) => {
        console.log(error);
      });

    return products;
  }

}
