import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAIConsultasDeclaracionesComponent } from './eaiconsultas-declaraciones.component';

describe('EAIConsultasDeclaracionesComponent', () => {
  let component: EAIConsultasDeclaracionesComponent;
  let fixture: ComponentFixture<EAIConsultasDeclaracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAIConsultasDeclaracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EAIConsultasDeclaracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
