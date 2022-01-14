import { Subject } from "rxjs";

export class MachineService {
    addMachine(name:string, status:string){
        const machineObject={
            id:0,
            name:'',
            status:'',
        };
        machineObject.name=name;
        machineObject.status=status;
        machineObject.id=this.machines[(this.machines.length-1)].id+1;
        this.machines.push(machineObject);
        this.emitMachineSubject();
    }
    machinesSubject = new Subject<any[]>();
    private machines = [
        {
            id: 1,
            name: 'machine à laver',
            status: 'Eteint'
        },
        {
            id: 2,
            name: 'Télévision',
            status: 'Allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'Eteint'
        }

    ];
    
    emitMachineSubject() {
        this.machinesSubject.next(this.machines.slice());

    }

    switchOnAll() {
        for (let appareil of this.machines) {
            appareil.status = 'Allumé';
        }
        this.emitMachineSubject();
    }

    switchOffAll() {
        for (let appareil of this.machines) {
            appareil.status = 'Eteint';
        }
        this.emitMachineSubject();
    }

    switchOnOne(i: number) {
        this.machines[i].status = 'Allumé';
    }

    switchOffOne(i: number) {
        this.machines[i].status = 'Eteint';
        this.emitMachineSubject();

    }
    getAppareilById(id: number) {
        const machine = this.machines.find(
            (s) => {
                return s.id === id;
            }
        );
        return machine;
    }
}