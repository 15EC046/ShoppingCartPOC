import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary/cartSummary.component";
import { CartDetailComponent } from "./cartDetail/cartDetail.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { RouterModule } from "@angular/router";
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe} from '../search-filter-pipe.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule,NgxPaginationModule
        // Ng2SearchPipeModule
    ],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
        CartDetailComponent, CheckoutComponent,SearchPipe],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }