import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockComponent } from '../block/block.component';
import { BlocksComponent } from '../blocks/blocks.component';
import { LoaderComponent } from '../loader/loader.component';
import { IdentifierPipe } from '../pipes/identifier.pipe';
import { StatusComponent } from '../status/status.component';

import { NodeComponent } from './node.component';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NodeComponent, IdentifierPipe, StatusComponent, BlocksComponent, BlockComponent, LoaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
