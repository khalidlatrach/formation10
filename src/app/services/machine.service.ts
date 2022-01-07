export class MachineService {
    machines = [
        {
            name: 'machine à laver',
            status: 'Eteint'
        },
        {
            name: 'Télévision',
            status: 'Allumé'
        },
        {
            name: 'Ordinateur',
            status: 'Eteint'
        }

    ];

switchOnAll() {
    for(let appareil of this.machines){
        appareil.status='Allumé';
    }
}

switchOffAll(){
    for(let appareil of this.machines) {
        appareil.status='Eteint';
    }
}

switchOnOne(i: number) {
    this.machines[i].status = 'Allumé';
}

switchOffOne(i: number) {
    this.machines[i].status = 'Eteint';

}
}