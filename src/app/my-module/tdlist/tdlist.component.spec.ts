import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDListComponent } from './tdlist.component';

describe('TDListComponent', () => {
  let component: TDListComponent;
  let fixture: ComponentFixture<TDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TDListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
