import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionaliadeListComponent } from './funcionaliade-list.component';

describe('FuncionaliadeListComponent', () => {
  let component: FuncionaliadeListComponent;
  let fixture: ComponentFixture<FuncionaliadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionaliadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionaliadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
