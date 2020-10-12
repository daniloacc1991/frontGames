import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoNewComponent } from './juego-new.component';

describe('JuegoNewComponent', () => {
  let component: JuegoNewComponent;
  let fixture: ComponentFixture<JuegoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
