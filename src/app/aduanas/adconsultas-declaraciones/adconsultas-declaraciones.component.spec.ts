import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADConsultasDeclaracionesComponent } from './adconsultas-declaraciones.component';

describe('ADConsultasDeclaracionesComponent', () => {
  let component: ADConsultasDeclaracionesComponent;
  let fixture: ComponentFixture<ADConsultasDeclaracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADConsultasDeclaracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADConsultasDeclaracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
