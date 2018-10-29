import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Node } from '../../models/node.model';
import { NodesActions } from '../../store/nodes';
import { BlockService } from '../shared/services/block.service';
import { Block } from '../shared/dto/block.interface';

@Component({
  selector: 'node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node: Node;
  @Output() onToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;
  blocks: Block[];

  constructor(private blockService: BlockService){}

  ngOnInit(){
    this.blockService.fetchBlocks(this.node.url).subscribe(
      (blocks)=>{
        this.blocks = blocks;
      },
      (err)=>{
        // todo place a logger here
      }
    )
  }

  handleToogleExpand(node: Node): void{
    this.onToogleExpand.emit(node);
  }
  
}
