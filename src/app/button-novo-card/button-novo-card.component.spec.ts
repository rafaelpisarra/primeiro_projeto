import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNovoCardComponent } from './button-novo-card.component';

describe('ButtonNovoCardComponent', () => {
  let component: ButtonNovoCardComponent;
  let fixture: ComponentFixture<ButtonNovoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonNovoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNovoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
