import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServcompdemoComponent } from './servcompdemo.component';

describe('ServcompdemoComponent', () => {
  let component: ServcompdemoComponent;
  let fixture: ComponentFixture<ServcompdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServcompdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServcompdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
