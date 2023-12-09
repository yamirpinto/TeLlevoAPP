import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitaViajePage } from './solicita-viaje.page';

describe('SolicitaViajePage', () => {
  let component: SolicitaViajePage;
  let fixture: ComponentFixture<SolicitaViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitaViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
