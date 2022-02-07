import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeInvestimentosComponent } from './lista-de-investimentos.component';

describe('ListaDeInvestimentosComponent', () => {
  let component: ListaDeInvestimentosComponent;
  let fixture: ComponentFixture<ListaDeInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeInvestimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
