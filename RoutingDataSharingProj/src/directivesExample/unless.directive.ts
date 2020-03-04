import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (condition ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      //this.hasView = true;
    } else  {
      this.viewContainer.clear();
     // this.hasView = false;
    }
  }
  constructor(private templateRef: TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
