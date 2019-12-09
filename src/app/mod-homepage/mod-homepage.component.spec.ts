import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModHomepageComponent } from './mod-homepage.component';

describe('ModHomepageComponent', () => {
  let component: ModHomepageComponent;
  let fixture: ComponentFixture<ModHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
