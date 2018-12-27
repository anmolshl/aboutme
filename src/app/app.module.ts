import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UnderConstructionComponent} from './components/under.construction/under.construction';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home.page/home.page';
import {SwordShipComponent} from './components/sword.ship/sword.ship';

const routes: Routes = [
  {path: '', redirectTo: '/app-home', pathMatch: 'full'},
  {path: 'app-home', component: HomePageComponent},
  {path: 'app-under-construction', component: UnderConstructionComponent},
  {path: 'app-sword-ship', component: UnderConstructionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    HomePageComponent,
    SwordShipComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
