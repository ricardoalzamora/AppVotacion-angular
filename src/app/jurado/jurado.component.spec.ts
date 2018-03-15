import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoComponent } from './jurado.component';

describe('JuradoComponent', () => {
  let component: JuradoComponent;
  let fixture: ComponentFixture<JuradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
