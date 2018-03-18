import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotanteListComponent } from './votante-list.component';

describe('VotantesListComponent', () => {
  let component: VotanteListComponent;
  let fixture: ComponentFixture<VotanteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotanteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
