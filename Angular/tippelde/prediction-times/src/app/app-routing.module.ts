import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TippleadasComponent } from './tippleadas/tippleadas.component';
import { TabellaComponent } from './tabella/tabella.component';
import { SurvivorComponent } from './survivor/survivor.component';
import { DraftComponent } from './draft/draft.component';
import { InstatComponent } from './instat/instat.component';
import { PtkupaComponent } from './ptkupa/ptkupa.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'submit', component: TippleadasComponent },
    { path: 'tabella', component: TabellaComponent },
    { path: 'survivor', component: SurvivorComponent },
    { path: 'draft', component: DraftComponent },
    { path: 'instat', component: InstatComponent },
    { path: 'tippelde-kupa', component: PtkupaComponent },
    { path: 'login', component: AuthComponent },
    { path: '**', redirectTo: '/home' }
    ];

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
],
exports: [
    RouterModule
]
})
export class AppRoutingModule {



}
