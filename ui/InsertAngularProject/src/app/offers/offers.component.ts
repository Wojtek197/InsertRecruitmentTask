import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offersList: any = [];
  offer: any;

  offerTitleFilter: string = '';
  offerCategoryFilter: string = '';
  offerWithoutFilter: any = [];

  constructor(
    private service: SharedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.service.getOffers().subscribe(res => {
      this.offersList = res;
      this.offerWithoutFilter = res;
    })
  }

  openDialog(item?: any) {
    if (item === undefined) {
      item = {
        Id: 0,
        Title: "",
        Description: "",
        Price: "",
        Category: "",
        Created_at: ""
      }
    }
    const dialogRef = this.dialog.open(OfferDetailsComponent, {
      width: '700px',
      data: item
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getOffers();
    })
  }

  deleteOffer(id: number) {
    if (confirm(`Are you sure you want to delete offer with ID: ${id}`)) {
      this.service.deleteOffer(id).subscribe(res => {
        alert(res.toString());
        this.getOffers();
      })
    }
  }

  filter() {
    var offerTitleFilter = this.offerTitleFilter;
    var offerCategoryFilter = this.offerCategoryFilter;

    this.offersList = this.offerWithoutFilter.filter(function (e: any) {
      return e.Title.toString().toLowerCase().includes(
        offerTitleFilter.toString().trim().toLowerCase()
      )&&
      e.Category.toString().toLowerCase().includes(
        offerCategoryFilter.toString().trim().toLowerCase()
      )
    });
  }

  sort(prop: any, asc: any){
    this.offersList = this.offerWithoutFilter.sort(function(a: any,b: any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
