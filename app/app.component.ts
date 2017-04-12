import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'product-data',
    templateUrl: './product.html'
})
export class ProductComponent {
    product: Product;
    products: Array<Product>;

    constructor() {
        this.product = new Product(0, '', 0, '');
        this.products = new Array<Product>();
        this.products.push(new Product(101, 'Laptop', 98000, 'IT'));
        this.products.push(new Product(102, 'Desktop', 48000, 'IT'));
        this.products.push(new Product(103, 'TV', 18000, 'Electronics'));
    }
    save() {
        this.products.push(Object.assign({}, this.product));
    }

    clear() {
        this.product = new Product(0, '', 0, '');
    }
}