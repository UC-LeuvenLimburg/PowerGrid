import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { SenseoComponent } from './senseo/senseo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CircuitComponent } from './circuit/circuit.component';
import { StopcontactComponent } from './stopcontact/stopcontact.component';
import { LampComponent } from './lamp/lamp.component';
import { VerbruikpuntenComponent } from './verbruikpunten/verbruikpunten.component';
import { WattPipe } from './watt.pipe';
import { DeltaPipe } from './delta.pipe';
import { ToestelComponent } from './toestel/toestel.component';
import { HttpcomComponent } from './httpcom/httpcom.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    SenseoComponent,
    DashboardComponent,
    CircuitComponent,
    StopcontactComponent,
    LampComponent,
    VerbruikpuntenComponent,
    WattPipe,
    DeltaPipe,
    ToestelComponent,
    HttpcomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
