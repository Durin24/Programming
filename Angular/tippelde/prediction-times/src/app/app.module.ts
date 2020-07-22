import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TippleadasComponent } from './tippleadas/tippleadas.component';
import { TabellaComponent } from './tabella/tabella.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { DraftComponent } from './draft/draft.component';
import { InstatComponent } from './instat/instat.component';
import { PtkupaComponent } from './ptkupa/ptkupa.component';
import { ProfileComponent } from './profile/profile.component';
import { PtheaderComponent } from './ptheader/ptheader.component';

@NgModule({
  declarations: [
    AppComponent,
    TippleadasComponent,
    TabellaComponent,
    SurvivorComponent,
    DraftComponent,
    InstatComponent,
    PtkupaComponent,
    ProfileComponent,
    PtheaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
