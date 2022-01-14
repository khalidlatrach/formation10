import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { MachineService } from '../services/machine.service';
@Component({
  selector: 'app-machine-view',
  templateUrl: './machine-view.component.html',
  styleUrls: ['./machine-view.component.scss']
})
export class MachineViewComponent implements OnInit {
  title = 'mon-premier-projet';
  isAuth = false;
  lastUpdate = new Date();
  machines: any[] = [];
  secondes: number=0;

  machineSubscription: Subscription = new Subscription;
  
  data$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  


  constructor(private machineService: MachineService) {

    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    //this.machines = this.machineService.machines;
    const counter = interval(1000);
       this.machineSubscription = this.machineService.machinesSubject.subscribe(
      (machines: any[])=>{
        this.machines = machines;
      }
 
     );
     this.data$.subscribe({
       next: value => console.log(value),
       error: err => console.log(err),
       complete: () => console.log('done!')
     });
  this.machineService.emitMachineSubject();
  }
  

  onAllumer() {
    this.machineService.switchOnAll();
  }
  onEteindre() {
  if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')){
    this.machineService.switchOffAll();
  } else {
    return null;
}
 return null;
   
}


}
