import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberadoComponent } from './liberado.component';

describe('LiberadoComponent', () => {
  let component: LiberadoComponent;
  let fixture: ComponentFixture<LiberadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
