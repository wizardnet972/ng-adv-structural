import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[bSelectMatch]' })
export class BSelectMatchDirective {
    constructor(
        private templateRef: TemplateRef<any>
    ) { }
}
