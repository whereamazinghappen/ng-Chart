import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './shared/card/card.component';
import { RouterModule, Routes} from '@angular/router';
import { StatusPipe } from './shared/pipes/status.pipe';

const appRoutes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chart',component:ChartComponent}
]
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ChartComponent,
    CardComponent,
    StatusPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
