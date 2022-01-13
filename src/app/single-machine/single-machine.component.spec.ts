import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMachineComponent } from './single-machine.component';

describe('SingleMachineComponent', () => {
  let component: SingleMachineComponent;
  let fixture: ComponentFixture<SingleMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
