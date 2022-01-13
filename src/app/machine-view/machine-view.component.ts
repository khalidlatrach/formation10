import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { MachineService } from '../services/machine.service';
@Component({
  selector: 'app-machine-view',
  templateUrl: './machine-view.component.html',
  styleUrls: ['./machine-view.component.scss']
})
export class MachineViewComponent implements OnInit, OnDestroy {


  title = 'mon-premier-projet';
  isAuth = false;
  lastUpdate = new Date();
  machines: any[] = [];
  secondes: number = 0;
  machineSubscription: Subscription = new Subscription;


  constructor(private machineService: MachineService) { }
  ngOnDestroy(): void { this.machineSubscription.unsubscribe };

  ngOnInit() {
    //this.machines = this.machineService.machines;
    this.machineSubscription = this.machineService.machinesSubject.subscribe(
      (machines: any[]) => {
        this.machines = machines;
      }
    );
    this.machineService.emitMachineSubject();
  }
}