import { Component, OnInit } from '@angular/core';
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


  constructor(private machineService: MachineService) {

    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.machines = this.machineService.machines;
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
