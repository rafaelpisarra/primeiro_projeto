import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonCardCancelComponent } from './buton-card-cancel.component';

describe('ButonCardCancelComponent', () => {
  let component: ButonCardCancelComponent;
  let fixture: ComponentFixture<ButonCardCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButonCardCancelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButonCardCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
