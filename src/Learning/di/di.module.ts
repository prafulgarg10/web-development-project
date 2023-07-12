import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { MobileProductComponent } from '../binding/mobileproduct.component';



@NgModule({
    imports: [CommonModule],
    exports: [ProductComponent, MobileProductComponent],
    declarations: [ProductComponent, MobileProductComponent],
    providers: [ProductService], //Module level service
})
export class DIModule { }
