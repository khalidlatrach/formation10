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
import { SingleMachineComponent } from './single-machine/single-machine.component';
import { AuthService } from './services/auth.service';
import { EditeMachineComponentComponent } from './edite-machine-component/edite-machine-component.component';

const appRoutes: Routes = [
  { path: 'machines' , component: MachineViewComponent},
  { path: 'auth' , component: AuthComponent},
  { path: 'edit' , component: EditeMachineComponentComponent},
  { path: '' , component: MachineViewComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MachineComponent,
    AuthComponent,
    MachineViewComponent,
    SingleMachineComponent,
    EditeMachineComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MachineService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
