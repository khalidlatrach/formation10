import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';



import {FormsModule} from '@angular/forms';
import { MachineService } from './services/machine.service';

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
