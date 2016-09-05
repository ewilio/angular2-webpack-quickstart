import { RouterModule } from '@angular/router';
import { AboutComponent } from './index';

export const aboutRouting = RouterModule.forRoot([
    { path: 'about', component: AboutComponent },
]);
