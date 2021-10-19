import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Block } from 'src/models/block.model';
import { ApiService } from './api.service';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class BlocksStoreService extends Store<Block[]> {

  constructor(private api: ApiService) {
    super([]);
  }

  public getBlocks(node) {
    this._getBlocks(node).subscribe(blocks => {
      this.setState(blocks);
    });
  }

  private _getBlocks(node) {
    return this.api.get(`${node.url}/api/v1/blocks`).pipe(
      catchError(error =>
        of([])
      ),
      map((response) => {
        return response.data;
      })
    );
  }
}
