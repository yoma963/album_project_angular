import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSpecialComponent } from './album-special.component';

describe('AlbumSpecialComponent', () => {
  let component: AlbumSpecialComponent;
  let fixture: ComponentFixture<AlbumSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
