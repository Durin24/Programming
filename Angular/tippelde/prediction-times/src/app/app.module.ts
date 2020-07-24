import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TippleadasComponent } from './tippleadas/tippleadas.component';
import { TabellaComponent } from './tabella/tabella.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { DraftComponent } from './draft/draft.component';
import { InstatComponent } from './instat/instat.component';
import { PtkupaComponent } from './ptkupa/ptkupa.component';
import { ProfileComponent } from './profile/profile.component';
import { PtheaderComponent } from './ptheader/ptheader.component';
import { HomeComponent } from './home/home.component';
import { LegfrissebbTortenesekComponent } from './home/legfrissebb-tortenesek/legfrissebb-tortenesek.component';
import { HomeTabellaComponent } from './home/home-tabella/home-tabella.component';
import { AktivMerkozesekComponent } from './home/aktiv-merkozesek/aktiv-merkozesek.component';
import { HomeTippeldeKupaComponent } from './home/home-tippelde-kupa/home-tippelde-kupa.component';

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
    PtheaderComponent,
    HomeComponent,
    LegfrissebbTortenesekComponent,
    HomeTabellaComponent,
    AktivMerkozesekComponent,
    HomeTippeldeKupaComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
