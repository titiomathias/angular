import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLastNewsComponent } from './line-last-news.component';

describe('LineLastNewsComponent', () => {
  let component: LineLastNewsComponent;
  let fixture: ComponentFixture<LineLastNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineLastNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineLastNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
