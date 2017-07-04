import { forwardRef, Component, OnInit, ContentChild, ContentChildren, Input } from '@angular/core';
import { BSelectMatchDirective } from './b-select-match.directive';
import { BSelectOptionDirective } from './b-select-option.directive';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BDropDownComponent),
    multi: true
}

@Component({
    selector: 'b-dropdown',
    template: `
        <div class="dropdown" [class.open]="isOpen" (click)="isOpen=!isOpen">
            <button class="btn btn-default dropdown-toggle" type="button">
                <ng-container [ngTemplateOutlet]="match.templateRef"
                              [ngOutletContext]="selected">
                </ng-container>
                <span *ngIf="!selected.$implicit">{{placeholder}}</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li *ngFor="let option of options" (click)="select(option)">
                    <a href="#">
                        <ng-container [ngTemplateOutlet]="option.templateRef"></ng-container>
                    </a>
                </li>
            </ul>

        </div>
    `,
    providers: [VALUE_ACCESSOR],
})
export class BDropDownComponent implements ControlValueAccessor {

    @ContentChild(BSelectMatchDirective) match;
    @ContentChildren(BSelectOptionDirective) options;

    @Input() placeholder = 'Choose...';
    selected = {};
    onChange;
    isOpen = false;

    writeValue(selected: any): void {
        if (selected) {
            this.setSelected(selected);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    select(bSelectMatch) {
        this.setSelected(bSelectMatch);
        this.onChange(bSelectMatch.option);
    }

    setSelected(bSelectMatch) {
        this.selected = {
            $implicit: bSelectMatch.option ? bSelectMatch.option : bSelectMatch
        }
    }

    registerOnTouched() {

    }
}
