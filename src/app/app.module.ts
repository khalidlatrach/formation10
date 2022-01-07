import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineComponent } from './machine/machine.component';



import {FormsModule} from '@angular/forms';
import { MachineService } from './services/machine.service';
import { AuthComponent } from './auth/auth.component';
import { MachineViewComponent } from './machine-view/machine-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'machines' , component: MachineViewComponent},
  { path: 'auth' , component: AuthComponent},
  { path: '' , component: MachineViewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    AuthComponent,
    MachineViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
