import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { NewCovidPlacesComponent } from './new-covid-places/new-covid-places.component';
import { SavedCovidPlacesComponent } from './saved-covid-places/saved-covid-places.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    NewCovidPlacesComponent,
    SavedCovidPlacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
