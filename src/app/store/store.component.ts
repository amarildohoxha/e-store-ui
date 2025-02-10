import { Component, Input } from '@angular/core';
import {Store} from "../models/store.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./../../assets/scss/main.scss']
})
export class StoreComponent {
  @Input() product: any;
  // @Input() stores: any;
  @Input() cart: any;

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

  constructor() {
  }
  ngOnInit() {
  }
}
