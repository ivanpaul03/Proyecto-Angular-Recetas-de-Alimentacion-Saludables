import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuevoComponent } from './huevo.component';

describe('HuevoComponent', () => {
  let component: HuevoComponent;
  let fixture: ComponentFixture<HuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuevoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
