import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../../models/node.model';

@Component({
  selector: 'node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: Node;
  @Output() onToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  handleToogleExpand(node: Node): void {
    this.onToogleExpand.emit(node);
  }
}
