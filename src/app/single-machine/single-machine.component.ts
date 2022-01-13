import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineService } from '../services/machine.service';

@Component({
  selector: 'app-single-machine',
  templateUrl: './single-machine.component.html',
  styleUrls: ['./single-machine.component.scss']
})
export class SingleMachineComponent implements OnInit {

 name: string | undefined;
 status: string | undefined; 


  constructor(private machineService: MachineService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.machineService.getAppareilById(+id)?.name;
    this.status = this.machineService.getAppareilById(+id)?.status;

  }

}
