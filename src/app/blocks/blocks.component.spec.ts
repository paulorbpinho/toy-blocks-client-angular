import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockComponent } from '../block/block.component';
import { LoaderComponent } from '../loader/loader.component';
import { IdentifierPipe } from '../pipes/identifier.pipe';

import { BlocksComponent } from './blocks.component';

describe('BlocksComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlocksComponent, LoaderComponent, BlockComponent, IdentifierPipe]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
