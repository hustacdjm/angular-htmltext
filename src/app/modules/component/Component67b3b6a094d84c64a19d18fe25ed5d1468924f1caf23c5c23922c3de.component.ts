import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'Component67b3b6a094d84c64a19d18fe25ed5d1468924f1caf23c5c23922c3de',
    standalone   : true,
    templateUrl  : './Component67b3b6a094d84c64a19d18fe25ed5d1468924f1caf23c5c23922c3de.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule
    ]
    
})
export class Component67b3b6a094d84c64a19d18fe25ed5d1468924f1caf23c5c23922c3de
{

    @Input() data:any;
    /**
     * Constructor
     */
     constructor(public sanitizer:DomSanitizer){}

}
