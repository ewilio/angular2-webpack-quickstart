import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './index';

export const homeRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
]);
