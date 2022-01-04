import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { textChangeRangeIsUnchanged } from 'typescript';
import { SharedService } from '../shared.service';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList: any = [];
  title?: string;
  isActive: boolean = false;
  category: any;

  categoryNameFilter: string='';
  categoryOrderingFilter: string = '';
  categoryWithoutFilter: any = [];

  constructor(
    private service: SharedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.service.getCategory().subscribe(res => {
      this.categoryList = res;
      this.categoryWithoutFilter = res;
    })
  }

  openDialog(item?: any) {
    if (item === undefined) {
      item = {
        Id: 0,
        Name: "",
        Ordering: "",
      }
    }
    const dialogRef = this.dialog.open(CategoryDetailsComponent, {
      width: '700px',
      data: item
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getCategoryList();
    })
  }

  deleteCategory(id: number) {
    if (confirm(`Are you sure you want to delete category with ID: ${id}`)) {
      this.service.deleteCategory(id).subscribe(res => {
        alert(res.toString());
        this.getCategoryList();
      })
    }
  }


  filter() {
    var categoryNameFilter = this.categoryNameFilter;
    var categoryOrderingFilter = this.categoryOrderingFilter;

    this.categoryList = this.categoryWithoutFilter.filter(function (e: any) {
      return e.Name.toString().toLowerCase().includes(
        categoryNameFilter.toString().trim().toLowerCase()
      )&&
      e.Ordering.toString().toLowerCase().includes(
        categoryOrderingFilter.toString().trim().toLowerCase()
      )
    });
  }

  sort(prop: any, asc: any){
    this.categoryList = this.categoryWithoutFilter.sort(function(a: any,b: any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
