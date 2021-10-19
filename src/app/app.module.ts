import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { LoaderComponent } from './loader/loader.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, LoaderComponent, BlocksComponent, BlockComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
