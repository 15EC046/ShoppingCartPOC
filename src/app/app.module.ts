import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreFirstGuard } from "./storeFirst.guard";
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { SearchFilterPipe} from './search-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,StoreModule,
    // Ng2SearchPipeModule
  ],
  // exports:[SearchFilterPipe],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
