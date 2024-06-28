import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSecretoComponent } from './painel-secreto.component';

describe('PainelSecretoComponent', () => {
  let component: PainelSecretoComponent;
  let fixture: ComponentFixture<PainelSecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelSecretoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelSecretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
