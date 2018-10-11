import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UnderConstructionComponent} from './components/under.construction/under.construction';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home.page/home.page';

const routes: Routes = [
  {path: '', redirectTo: '/app-under-construction', pathMatch: 'full'},
  {path: 'app-home', component: HomePageComponent},
  {path: 'app-under-construction', component: UnderConstructionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
