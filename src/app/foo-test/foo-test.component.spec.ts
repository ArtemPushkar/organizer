import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooTestComponent } from './foo-test.component';

describe('FooTestComponent', () => {
  let component: FooTestComponent;
  let fixture: ComponentFixture<FooTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
