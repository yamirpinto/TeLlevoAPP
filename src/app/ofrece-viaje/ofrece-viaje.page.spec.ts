import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfreceViajePage } from './ofrece-viaje.page';

describe('OfreceViajePage', () => {
  let component: OfreceViajePage;
  let fixture: ComponentFixture<OfreceViajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfreceViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
