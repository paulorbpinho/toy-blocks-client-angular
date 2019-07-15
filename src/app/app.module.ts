import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';

import configureStore from '../store/configureStore';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent],
  imports: [BrowserModule, NgReduxModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.provideStore(configureStore);
  }
}
