import { TestBed } from '@angular/core/testing';

import { NodesStore } from './nodesStore.service';

describe('NodesStore', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodesStore = TestBed.get(NodesStore);
    expect(service).toBeTruthy();
  });
});
