import { Component, Input, OnInit } from '@angular/core';
import { MachineService } from '../services/machine.service';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss'],
})
export class MachineComponent {
  @Input() machineName: string = '';
  @Input() machineStatus: string = '';
  @Input() index: number = 0;

  constructor(private machineService: MachineService) { }


  getStatus() {
    return this.machineStatus;
  }


  onSwitch() {
    if (this.machineStatus === 'Allumé') {

      this.machineService.switchOffOne(this.index);
      
    } else if (this.machineStatus === 'Eteint') {
      this.machineService.switchOnOne(this.index);
    }
  }

  getColor() {

    if (this.machineStatus === "Eteint") {
      return 'red';


    } else if (this.machineStatus === "Allumé") {
      return 'green';
    }
    return;
  }

}
