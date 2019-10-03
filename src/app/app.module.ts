import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';



import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './auth/home/home.component';
import { ErrorComponent } from './error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EventModule } from './modules/event/event.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { ReportModule } from './modules/report/report.module';
import { PaymentModule } from './modules/payment/payment.module';
import { EventLogComponent } from './modules/event/event-log/event-log.component';
import { AddEventComponent } from './modules/event/add-event/add-event.component';
import { ViewEventComponent } from './modules/event/view-event/view-event.component';
import { SongListComponent } from './modules/event/song-list/song-list.component';
import {EventService} from "./services/event-service/event.service";
import {MatAutocompleteModule} from "@angular/material";
import {SongService} from "./services/song-service/song.service";
import {InvoiceService} from "./services/invoice-service/invoice.service";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'add-event', component: AddEventComponent },
  {path: 'song-list', component: SongListComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    EventLogComponent,
    AddEventComponent,
    ViewEventComponent,
    SongListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    EventModule,
    InvoiceModule,
    ReportModule,
    PaymentModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule
  ],
  entryComponents: [ErrorComponent, SongListComponent, AddEventComponent],
  providers: [EventService, DatePipe, SongService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
