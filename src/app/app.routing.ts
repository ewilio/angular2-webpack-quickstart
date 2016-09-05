import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './_shared/index';

const appRoutes: Routes = [
    { path: '**', component: NotFoundComponent },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);