import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoDetalle } from './departamento-detalle';

describe('DepartamentoDetalle', () => {
  let component: DepartamentoDetalle;
  let fixture: ComponentFixture<DepartamentoDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
