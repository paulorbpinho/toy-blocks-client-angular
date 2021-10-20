import { Component, Input, OnInit } from '@angular/core';
import { BlocksStoreService } from '../services/blocks-store.service';
import { Node } from 'src/models/node.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  constructor(public blocksStore: BlocksStoreService) { }

  @Input() node: Node;

  ngOnInit() {
    if (this.node) {
      this.blocksStore.getBlocks(this.node);
    }
  }

}
