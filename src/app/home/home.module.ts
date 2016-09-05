import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent, homeRouting} from './index';

@NgModule({
    imports: [CommonModule, FormsModule, homeRouting],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule { }