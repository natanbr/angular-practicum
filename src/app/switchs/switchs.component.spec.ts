import { ComponentFixture, TestBed } from '@angular/core/testing';

import { switchesComponent } from './switchs.component';

describe('SwitchsComponent', () => {
  let component: switchesComponent;
  let fixture: ComponentFixture<switchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ switchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(switchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
