import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeListComponent } from './recepe-list.component';

describe('RecepeListComponent', () => {
  let component: RecepeListComponent;
  let fixture: ComponentFixture<RecepeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
