import { Component } from '@angular/core';

interface Item {
  name: string;
  category: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: Item[] = [
    { name: 'Item 1', category: 'A' },
    { name: 'Item 2', category: 'B' },
    { name: 'Item 3', category: 'A' },
    { name: 'Item 4', category: 'C' }
  ];
}

