import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from "@angular/router";
import { FormsModule  } from "@angular/forms";
import {HttpClientModule } from '@angular/common/http';




import { RemotecallService } from "./remotecall.service";
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { TodoComponent } from './task/todo/todo.component';
import { ApiComponent } from './http/api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogueComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path:"catalogue",
      component:CatalogueComponent
    },
    {
      path:"products",
      component:ProductsComponent
    },
    {
      path:"todo",
      component:TodoComponent
    }
    {
      path:"remote",
      component:ApiComponent
    }
  ]),
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
