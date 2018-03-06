import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotaComponent } from './vota.component';

describe('VotaComponent', () => {
  let component: VotaComponent;
  let fixture: ComponentFixture<VotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
