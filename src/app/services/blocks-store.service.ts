import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Blocks } from 'src/models/blocks.model';
import { ApiService } from './api.service';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class BlocksStoreService extends Store<Blocks> {

  constructor(private api: ApiService) {
    super({ blocks: null, loading: true });
  }

  public getBlocks(node) {
    this.setState({ blocks: null, loading: true });
    this._getBlocks(node).subscribe(blocks => {
      this.setState(blocks);
    });
  }

  private _getBlocks(node) {
    return this.api.get(`${node.url}/api/v1/blocks`).pipe(
      catchError(error =>
        of({ blocks: null, loading: false })
      ),
      map((response) => {
        return {
          blocks: response.data,
          loading: false
        };
      })
    );
  }
}
