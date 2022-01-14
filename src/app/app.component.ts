import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MachineService } from './services/machine.service';
import { Subscription, Observable, interval} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


constructor(private machineService : MachineService){}
  ngOnInit(){
  // this.machines = this.machineService.machines;
     
        
  // });  
  }

  data$ = new Observable(observer =>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();});


}
