import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajasCaloriasComponent } from './bajas-calorias.component';

describe('BajasCaloriasComponent', () => {
  let component: BajasCaloriasComponent;
  let fixture: ComponentFixture<BajasCaloriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajasCaloriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BajasCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
