import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerNewComponent } from './alquiler-new.component';

describe('AlquilerNewComponent', () => {
  let component: AlquilerNewComponent;
  let fixture: ComponentFixture<AlquilerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquilerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquilerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
