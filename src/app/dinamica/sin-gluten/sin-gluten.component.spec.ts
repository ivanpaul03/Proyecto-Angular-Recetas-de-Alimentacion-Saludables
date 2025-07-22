import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinGlutenComponent } from './sin-gluten.component';

describe('SinGlutenComponent', () => {
  let component: SinGlutenComponent;
  let fixture: ComponentFixture<SinGlutenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinGlutenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinGlutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
