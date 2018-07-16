import { Component, OnInit, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { Nodes } from '../../models/nodes.model'
import { Node } from '../../models/node.model'
import { NodesActions } from '../../store/nodes';

@Component({
  selector: 'node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
})
export class NodesComponent implements OnInit {
  @select(['nodes', 'list']) readonly nodes$: Observable<Nodes>;

  expandedNodeURL: string = null;

  constructor (private ngRedux: NgRedux<any>) {}

  ngOnInit() {
    const nodes = this.ngRedux.getState().nodes.list;
    nodes.forEach(node => this.ngRedux.dispatch(NodesActions.checkNodeStatus(node)))
  }

  onToogleExpand(node: Node): void {
    this.expandedNodeURL = node.url === this.expandedNodeURL ? null : node.url;
  }

  isExpanded(node: Node): boolean {
    return this.expandedNodeURL === node.url;
  }

  setMessage(message: string): void {
    this.expandedNodeURL = message;
  }

}
