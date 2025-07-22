import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolloComponent } from './pollo.component';

describe('PolloComponent', () => {
  let component: PolloComponent;
  let fixture: ComponentFixture<PolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
