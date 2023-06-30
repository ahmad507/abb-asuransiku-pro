import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PofilePage } from './pofile.page';

describe('PofilePage', () => {
  let component: PofilePage;
  let fixture: ComponentFixture<PofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
