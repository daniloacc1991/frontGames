import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerListComponent } from './alquiler-list.component';

describe('AlquilerListComponent', () => {
  let component: AlquilerListComponent;
  let fixture: ComponentFixture<AlquilerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
