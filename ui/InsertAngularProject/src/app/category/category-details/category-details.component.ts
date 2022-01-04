import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  categoryName?: string;
  categoryOrdering?: number;

  constructor(
    private dialogRef: MatDialogRef<CategoryDetailsComponent>,
    private service: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.categoryName = this.data.Name;
    this.categoryOrdering = this.data.Ordering
  }

  addCategory() {
    const newCategory = {
      Name: this.categoryName,
      Ordering: this.categoryOrdering
    };
    this.service.addCategory(newCategory).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCategory() {
    const updatedCategory = {
      Id: this.data.Id,
      Name: this.categoryName,
      Ordering: this.categoryOrdering
    };
    this.service.updateCategory(updatedCategory).subscribe(res => {
      alert(res.toString());
    });
  }
}
