import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import {RouterModule} from '@angular/router';
import { CastComponent } from './cast/cast.component';
import { IonicModule } from '@ionic/angular';
import { SearchviewComponent } from './searchview/searchview.component';


@NgModule({
  declarations: [MoviePreviewComponent,CastComponent,SearchviewComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [MoviePreviewComponent,CastComponent,SearchviewComponent]
})
export class SharedComponentsModule { }
