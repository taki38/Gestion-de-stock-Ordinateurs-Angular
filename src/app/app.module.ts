import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPcComponent } from './components/add-pc/add-pc.component';
import { EditPcComponent } from './components/edit-pc/edit-pc.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PcDetailsComponent } from './components/pc-details/pc-details.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AddPcComponent,
    EditPcComponent,
    PcDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
