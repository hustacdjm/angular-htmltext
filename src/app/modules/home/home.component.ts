import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, MatIconModule,
        MatIconModule,  CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
        MatInputModule, MatRadioModule],
})
export class LandingHomeComponent implements AfterContentInit
{

    /**
     * Constructor
     */
    constructor(private componentFactoryResolver: ComponentFactoryResolver)
    {



    }
  

    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
   

    template={
  "name" : "HtmlText",
  "description" : "show html text ",
  "version" : "2.0"
};
  
    reactiveComponent={
  "component" : {
    "componentTemplateId" : "67b3aeef94d84c64a19d18fd",
    "templateDeployId" : null,
    "content" : {
      "htmltext" : "<p>this component shows <strong>html text content</strong></p>"
    },
    "ui" : { },
    "scores" : [ ]
  },
  "runtime" : {
    "data" : { }
  },
  "constants" : { }
};



    async ngAfterContentInit() {
      
      this.StartTest();

    }

   
    async StartTest(){
      
        const componentModule = await import('../component/Component67b3b6a094d84c64a19d18fe25ed5d1468924f1caf23c5c23922c3de.component');
        const TemplateComponent = componentModule['Component67b3b6a094d84c64a19d18fe25ed5d1468924f1caf23c5c23922c3de'];

        this.testContainer.clear();

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TemplateComponent);

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(componentFactory);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

}
