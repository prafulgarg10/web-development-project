import { Component, OnInit } from '@angular/core';
import { MobileProductService } from './mobileproduct.service';

@Component({
  selector: 'app-trackby',
  templateUrl: './mobileproduct.component.html'
})
export class MobileProductComponent implements OnInit {

    companyProduct: any[] =[]

    SampleMessage = "Fetching records using TrackBy for Performance";
    constructor(private ps: MobileProductService) {
    }

    ngOnInit() {
        this.companyProduct = this.ps.getAllProductsUsingTrackBy();
    }
    getNewCompanies(): void {
        this.companyProduct =
            this.ps.getAllProductsUsingTrackByExample();
      }

    trackByArtNo(index: number, companyProduct: any): string {
        return companyProduct.ArtNo;

    }
}
