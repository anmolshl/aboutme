import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UnderConstructionComponent} from './components/under.construction/under.construction';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home.page/home.page';

const routes: Routes = [
  {path: '', redirectTo: '/underconstruction', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'underconstruction', component: UnderConstructionComponent}
];

@NgModule({
  declarations: [
    UnderConstructionComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [UnderConstructionComponent, HomePageComponent]
})
export class AppModule { }
