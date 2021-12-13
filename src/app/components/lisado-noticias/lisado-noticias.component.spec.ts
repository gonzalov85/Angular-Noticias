import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisadoNoticiasComponent } from './lisado-noticias.component';

describe('LisadoNoticiasComponent', () => {
  let component: LisadoNoticiasComponent;
  let fixture: ComponentFixture<LisadoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisadoNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
