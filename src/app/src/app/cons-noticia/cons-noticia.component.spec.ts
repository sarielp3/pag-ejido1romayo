import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsNoticiaComponent } from './cons-noticia.component';

describe('ConsNoticiaComponent', () => {
  let component: ConsNoticiaComponent;
  let fixture: ComponentFixture<ConsNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
