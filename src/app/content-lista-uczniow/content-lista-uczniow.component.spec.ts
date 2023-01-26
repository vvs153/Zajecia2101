import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListaUczniowComponent } from './content-lista-uczniow.component';

describe('ContentListaUczniowComponent', () => {
  let component: ContentListaUczniowComponent;
  let fixture: ComponentFixture<ContentListaUczniowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListaUczniowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListaUczniowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
