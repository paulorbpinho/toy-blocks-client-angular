import { Component, Input, OnInit } from '@angular/core';
import { BlocksStoreService } from '../services/blocks-store.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  constructor(public blocksStore: BlocksStoreService) { }

  @Input() node: Node;

  ngOnInit() {
    this.blocksStore.getBlocks(this.node);
  }

}
