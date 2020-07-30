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

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'submit', component: TippleadasComponent, canActivate: [AuthGuard] },
    { path: 'tabella', component: TabellaComponent, canActivate: [AuthGuard] },
    { path: 'survivor', component: SurvivorComponent, canActivate: [AuthGuard] },
    { path: 'draft', component: DraftComponent, canActivate: [AuthGuard] },
    { path: 'instat', component: InstatComponent, canActivate: [AuthGuard] },
    { path: 'tippelde-kupa', component: PtkupaComponent, canActivate: [AuthGuard] },
    { path: 'login', component: AuthComponent },
    { path: '**', redirectTo: '/login' }
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
