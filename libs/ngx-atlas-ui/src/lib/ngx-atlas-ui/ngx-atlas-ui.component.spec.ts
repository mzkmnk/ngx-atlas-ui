import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxAtlasUiComponent } from './ngx-atlas-ui.component';

describe('NgxAtlasUiComponent', () => {
  let component: NgxAtlasUiComponent;
  let fixture: ComponentFixture<NgxAtlasUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAtlasUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxAtlasUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
