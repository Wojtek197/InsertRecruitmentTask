import { DecimalPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {
  offerTitle?: string;
  offerDescription?: string;
  offerPrice?: string;
  offerCategory?: string;
  offerCreated = new Date();
  categoryList: any = [];
  createOfferDate?: string;

  constructor(
    private dialogRef: MatDialogRef<OfferDetailsComponent>,
    private service: SharedService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.service.getCategory().subscribe(res => {
      this.categoryList = res;
      console.log(res);

      this.offerTitle = this.data.Title;
      this.offerDescription = this.data.Description;
      this.offerPrice = this.data.Price;
      this.offerCategory = this.data.Category;
      this.offerCreated = this.data.Created_at;
    });
  }

  addOffer() {
    const newOffer = {
      Title: this.offerTitle,
      Description: this.offerDescription,
      Price: this.offerPrice,
      Category: this.offerCategory,
      Created_at: this.transformDate(this.offerCreated)
    }
    this.service.addOffer(newOffer).subscribe(res => {
      alert(res.toString())
    })
  }

  updateOffer() {
    const updatedOffer = {
      Id: this.data.Id,
      Title: this.offerTitle,
      Description: this.offerDescription,
      Price: this.offerPrice,
      Category: this.offerCategory,
      Created_at: this.data.Created_at
    }
    this.service.updateOffer(updatedOffer).subscribe(res => {
      alert(res.toString());
    })
  }

  transformDate(item: Date): string | null {
    const offerDate = new Date()
    item = offerDate
    var newDate = this.datePipe.transform(offerDate, 'yyyy-MM-dd');
    return newDate;
  }

  compareById(itemA: any, itemB: any): boolean {
    if (itemA === undefined && itemB === undefined) {
        return true; // show the default option
    } else if (itemA && itemB) {
        return (itemA.id === itemB.id); // show the specific option
    }
    else {
        return false; // no match found
    }
}
}
