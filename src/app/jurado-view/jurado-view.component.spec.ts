import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoViewComponent } from './jurado-view.component';

describe('JuradoViewComponent', () => {
  let component: JuradoViewComponent;
  let fixture: ComponentFixture<JuradoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuradoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
