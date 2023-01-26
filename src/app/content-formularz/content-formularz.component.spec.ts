import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFormularzComponent } from './content-formularz.component';

describe('ContentFormularzComponent', () => {
  let component: ContentFormularzComponent;
  let fixture: ComponentFixture<ContentFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFormularzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
