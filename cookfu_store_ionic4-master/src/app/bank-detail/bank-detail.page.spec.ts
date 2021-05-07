import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankDetailPage } from './bank-detail.page';

describe('BankDetailPage', () => {
  let component: BankDetailPage;
  let fixture: ComponentFixture<BankDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
