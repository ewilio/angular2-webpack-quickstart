import { RouterModule } from '@angular/router';
import { HomeComponent } from './index';

export const homeRouting = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
]);
