import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { NodeComponent } from './node.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlockService } from '../shared/services/block.service';
import { Block } from '../shared/dto/block.interface';

describe('StatusComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;
  let httpMock: HttpTestingController;
  let service: BlockService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [BlockService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(BlockService);
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should fetch blocks', () => {
    const blocks: Block[] = [{
        id: 1,
        attributes: {
            "id":"5",
            "type":"blocks",
            "attributes":{
                "index":1,
                "timestamp":1530679678,
                "data":"The Human Torch",
                "previous-hash":"KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=",
                "hash":"oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc="
            }
    }}];

    component.node = {
        url: 'http://testnode',
        online: true,
        name: 'something',
        loading: false,
    };

    fixture.detectChanges();
    const req = httpMock.expectOne('http://testnode/api/v1/blocks');
    req.flush({
        data: blocks
    });
    expect(component.blocks).toEqual(blocks);
  });
});