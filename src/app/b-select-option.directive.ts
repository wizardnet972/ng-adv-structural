import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({ selector: '[bSelectOption]' })
export class BSelectOptionDirective {

    option;

    constructor(
        private templateRef: TemplateRef<any>
    ) { }

    @Input() set bSelectOption(option) {
        this.option = option;
    }
}
