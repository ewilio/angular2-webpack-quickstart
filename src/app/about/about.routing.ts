import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './index';

export const aboutRouting: ModuleWithProviders = RouterModule.forChild([
    { path: 'about', component: AboutComponent },
]);
