import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlfabricMultiModalComponent } from './mlfabric-multi-modal.component';

describe('MlfabricMultiModalComponent', () => {
  let component: MlfabricMultiModalComponent;
  let fixture: ComponentFixture<MlfabricMultiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlfabricMultiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlfabricMultiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
