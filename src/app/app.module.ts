import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerialService } from './serial.service';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RfidComponent } from './rfid/rfid.component';
import { PortComponent } from './port/port.component';
import { RunnerComponent } from './runner/runner.component';
import { LapComponent } from './lap/lap.component';

@NgModule({
  declarations: [
    AppComponent,
    RfidComponent,
    PortComponent,
    RunnerComponent,
    LapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    SerialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
