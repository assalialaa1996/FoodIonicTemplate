import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersStatusPage } from './orders-status.page';

describe('OrdersStatusPage', () => {
  let component: OrdersStatusPage;
  let fixture: ComponentFixture<OrdersStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
