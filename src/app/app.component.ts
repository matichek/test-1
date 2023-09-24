import { Component } from '@angular/core';
import { Product, ProductsResponse } from './product';
import { AppService } from './app.service';
import { TableLazyLoadEvent } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-1';
  products: Product[] = [];
  totalRecords: number = 0;

  // TODO - id and sort is not working

  sortField: string = 'id';
  sortOrder: number = 1;

  // implement sortField and sortOrderđ

  loader: boolean = true;

  constructor(private appService: AppService) {}

  // ngOnInit() {
  //   this.loadProducts();
  // }

  loadProducts($event: TableLazyLoadEvent) {
    this.loader = true;


    this.appService.getProducts($event.first || 0).subscribe((response) => {
      this.loader = false;
      this.products = response.products;
      this.totalRecords = response.total;
    });
  }

}
