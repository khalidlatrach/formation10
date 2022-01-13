import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeMachineComponentComponent } from './edite-machine-component.component';

describe('EditeMachineComponentComponent', () => {
  let component: EditeMachineComponentComponent;
  let fixture: ComponentFixture<EditeMachineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeMachineComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeMachineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
