import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagelanguagePage } from './managelanguage.page';

describe('ManagelanguagePage', () => {
  let component: ManagelanguagePage;
  let fixture: ComponentFixture<ManagelanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelanguagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagelanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
