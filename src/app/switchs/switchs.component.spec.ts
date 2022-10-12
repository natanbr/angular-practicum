import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchsComponent } from './switchs.component';

describe('SwitchsComponent', () => {
  let component: SwitchsComponent;
  let fixture: ComponentFixture<SwitchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
