import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Store} from "../../models/store.model";

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./../../../assets/scss/main.scss']
})
export class ProductInformationComponent implements OnInit {
  // @Input() product: any;
  product = {
    name: 'Μπανάνες Εισαγωγής',
    category: 'Φρούτα',
    description: 'Οι μπανάνες είναι ένα από τα πιο αγαπημένα φρούτα των ανθρώπων, γνωστά για την γλυκιά τους γεύση και την υψηλή τους περιεκτικότητα σε κάλιο.',
    price: '1.48€',
    imageUrl: 'assets/bananas.png'
  };

  public slides = [
    {src: "/assets/images/products/bananas.jpg"},
    {src: "/assets/images/products/apples.jpg"},
    {src: "/assets/images/products/bread.jpg"}
    // { src: "/assets/images/products/bananas.jpg" }
  ];

  stores: Store[] = [
    {
      id: 1,
      name: 'Bazaar',
      stock: 10,
      image: '/assets/images/to-be-deleted/bazaar.png',
      phone: '21000162',
      address: 'Athens 27054',
      distance: '2 χιλ.',
      updateDate: '27/08/2024',
      price: '1.48€'
    },
    {
      id: 2,
      name: 'kritikos',
      distance: '1,2 χιλ.',
      stock: 20,
      image: '/assets/images/to-be-deleted/kritikos.png',
      phone: '21000162',
      address: 'Athens 27054',
      updateDate: '27/08/2024',
      price: '1.50€'
    },
    {
      id: 3,
      name: 'My Market',
      distance: '1,8 χιλ.',
      stock: 15,
      image: '/assets/images/to-be-deleted/mymarket.png',
      phone: '21000162',
      address: 'Athens 27054',
      updateDate: '27/08/2024',
      price: '1.52€'
    },
    // Add more store objects as needed
  ];

  quantity: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddQuantity() {
    this.quantity++;
  }

  onRemoveQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
