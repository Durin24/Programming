import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PtheaderComponent } from './ptheader/ptheader.component';
import { TippleadasComponent } from './tippleadas/tippleadas.component';
import { TabellaComponent } from './tabella/tabella.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { DraftComponent } from './draft/draft.component';
import { InstatComponent } from './instat/instat.component';
import { PtkupaComponent } from './ptkupa/ptkupa.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LegfrissebbTortenesekComponent } from './home/legfrissebb-tortenesek/legfrissebb-tortenesek.component';
import { HomeTabellaComponent } from './home/home-tabella/home-tabella.component';
import { AktivMerkozesekComponent } from './home/aktiv-merkozesek/aktiv-merkozesek.component';
import { HomeTippeldeKupaComponent } from './home/home-tippelde-kupa/home-tippelde-kupa.component';
import { AuthComponent } from './auth/auth.component';

import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

const config = {
  apiKey: 'AIzaSyAUfhqXj3eKVTjfx6JaR_BFi7kE1LeBo60',
  authDomain: 'prediction-times.firebaseapp.com',
  databaseURL: 'https://prediction-times.firebaseio.com',
  projectId: 'prediction-times',
  storageBucket: 'prediction-times.appspot.com',
  messagingSenderId: '343006750532',
  appId: '1:343006750532:web:7575e66753fd3e6d2b5911',
  measurementId: 'G-XZ66782HMD'
};

@NgModule({
  declarations: [
    AppComponent,
    PtheaderComponent,
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
    HomeTippeldeKupaComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
