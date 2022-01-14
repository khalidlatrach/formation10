import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MachineService } from '../services/machine.service';


@Component({
  selector: 'app-edite-machine-component',
  templateUrl: './edite-machine-component.component.html',
  styleUrls: ['./edite-machine-component.component.scss']
})
export class EditeMachineComponentComponent implements OnInit {

  defaultValueStatus = 'Eteint'

  constructor(private machineService: MachineService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const status = form.value['status'];
    this.machineService.addMachine(name, status);
    this.router.navigate(['/machines']);


  }


}
