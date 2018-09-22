import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UnderConstructionComponent} from './components/under.construction/under.construction';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: UnderConstructionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, UnderConstructionComponent]
})
export class AppModule { }
