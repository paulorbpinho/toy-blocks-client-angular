import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Node } from '../../models/node.model';
import { NodesActions } from '../../store/nodes';

@Component({
  selector: 'node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent {
  @Input() node: Node;
  @Output() onToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  handleToogleExpand(node: Node): void{
    this.onToogleExpand.emit(node);
  }
}
