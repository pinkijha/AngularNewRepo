import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/nabvar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent, 
    PostComponent, PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
