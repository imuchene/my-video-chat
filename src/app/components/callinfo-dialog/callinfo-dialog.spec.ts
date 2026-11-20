import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallinfoDialog } from './callinfo-dialog';

describe('CallinfoDialog', () => {
  let component: CallinfoDialog;
  let fixture: ComponentFixture<CallinfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallinfoDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CallinfoDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
