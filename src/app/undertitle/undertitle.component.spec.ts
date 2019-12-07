import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndertitleComponent } from './undertitle.component';

describe('UndertitleComponent', () => {
  let component: UndertitleComponent;
  let fixture: ComponentFixture<UndertitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndertitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndertitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
