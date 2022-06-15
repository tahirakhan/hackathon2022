import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {StarterViewComponent} from "./starterview.component";
import {LoginComponent} from "./login.component";

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { GenericService } from "app/services/service";
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from "@angular/common/http";




@NgModule({
  declarations: [
    StarterViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    ModalModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent
  ],
  providers: [BsModalService, GenericService, HttpClient]
})

export class AppviewsModule {
}
