import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoProteinaComponent } from './alto-proteina.component';

describe('AltoProteinaComponent', () => {
  let component: AltoProteinaComponent;
  let fixture: ComponentFixture<AltoProteinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltoProteinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltoProteinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
