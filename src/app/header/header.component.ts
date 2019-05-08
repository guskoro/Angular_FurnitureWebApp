import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category.model';
import { CategoryService } from '../shared/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  categoryList: Category[] = [];

  constructor(private categorySrv: CategoryService) {}

  ngOnInit() {
    this.categorySrv.loadCategories().subscribe(result => {
      console.log('finish loading');
      this.categoryList = result;
    });
  }
}
