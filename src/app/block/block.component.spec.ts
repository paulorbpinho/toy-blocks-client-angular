import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentifierPipe } from '../pipes/identifier.pipe';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockComponent, IdentifierPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
