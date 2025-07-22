import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesoComponent } from './queso.component';

describe('QuesoComponent', () => {
  let component: QuesoComponent;
  let fixture: ComponentFixture<QuesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
