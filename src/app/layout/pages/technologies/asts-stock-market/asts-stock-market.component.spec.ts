import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstsStockMarketComponent } from './asts-stock-market.component';

describe('AstsStockMarketComponent', () => {
  let component: AstsStockMarketComponent;
  let fixture: ComponentFixture<AstsStockMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstsStockMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstsStockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
