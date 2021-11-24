// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { APComponent } from './components/ap/ap.component';

import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { Utilities } from './services/utilities';
import { MasterdatapageComponent } from './components/master-data/masterdatapage.component';
import { MultipleTrainingComponent } from './components/ap/trainings/multiple-training.component';
import { MainReportComponent } from './components/orders/main-report.component';



@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        const possibleSeparators = /[?;#]/;
        const indexOfSeparator = url.search(possibleSeparators);
        let processedUrl: string;

        if (indexOfSeparator > -1) {
            const separator = url.charAt(indexOfSeparator);
            const urlParts = Utilities.splitInTwo(url, separator);
            urlParts.firstPart = urlParts.firstPart.toLowerCase();

            processedUrl = urlParts.firstPart + separator + urlParts.secondPart;
        } else {
            processedUrl = url.toLowerCase();
        }

        return super.parse(processedUrl);
    }
}


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'Home' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'masterdata', component: MasterdatapageComponent, canActivate: [AuthGuard], data: { title: 'masterdata' } },
    { path: 'ap', component: APComponent, canActivate: [AuthGuard], data: { title: 'Ap' } },
    { path: 'reports', component: MainReportComponent, canActivate: [AuthGuard], data: { title: 'Reports' } },
    { path: 'trainings', component: MultipleTrainingComponent, canActivate: [AuthGuard], data: { title: 'Tranings' } },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: { title: 'Settings' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AuthService,
        AuthGuard,
        { provide: UrlSerializer, useClass: LowerCaseUrlSerializer }]
})
export class AppRoutingModule { }
