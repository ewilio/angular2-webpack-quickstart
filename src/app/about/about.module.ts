import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent, aboutRouting} from './index';

@NgModule({
    imports: [CommonModule, FormsModule, aboutRouting],
    declarations: [AboutComponent],
    exports: [AboutComponent],
})
export class AboutModule { }