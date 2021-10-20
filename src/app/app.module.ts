import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BlocksComponent } from './blocks/blocks.component';
import { BlockComponent } from './block/block.component';
import { LoaderComponent } from './loader/loader.component';
import { IdentifierPipe } from './pipes/identifier.pipe';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, BlocksComponent,
    BlockComponent, LoaderComponent, IdentifierPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
