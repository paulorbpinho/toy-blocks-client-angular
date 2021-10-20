import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { NodeComponent } from '../node/node.component';
import { StatusComponent } from '../status/status.component';
import { NodesComponent } from './nodes.component';
import { BlocksComponent } from '../blocks/blocks.component';
import { LoaderComponent } from '../loader/loader.component';
import { BlockComponent } from '../block/block.component';
import { IdentifierPipe } from '../pipes/identifier.pipe';

describe('NodesComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: NodesComponent;
  let fixture: ComponentFixture<NodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NodesComponent, NodeComponent, StatusComponent, BlocksComponent, LoaderComponent, BlockComponent, IdentifierPipe],
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
