import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinLactosaComponent } from './sin-lactosa.component';

describe('SinLactosaComponent', () => {
  let component: SinLactosaComponent;
  let fixture: ComponentFixture<SinLactosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinLactosaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinLactosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
