import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { cx } from '../../utils/cx';
import { ButtonType, ButtonSize, BUTTON_STYLE, BUTTON_SIZE } from './button';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconLoader2 } from 'angular-tabler-icons/icons';
import { NgxAtlasUiLoadingDirective } from '../../directives/loading.directive';

@Component({
  selector: 'ngx-atlas-ui-button',
  imports: [TablerIconComponent, NgxAtlasUiLoadingDirective],
  providers: [
    provideTablerIcons({
      IconLoader2,
    }),
  ],
  template: `
    <button [class]="buttonClass()" (click)="buttonClick.emit()">
      <div class="flex items-center gap-1">
        @if(loading()){
        <i-tabler name="loader-2" [loadingSize]="size()" ngxAtlasUiLoading />
        }
        <ng-content></ng-content>
      </div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxAtlasUiButtonComponent {
  type = input<ButtonType>('primary');

  outline = input<boolean>(false);

  disabled = input<boolean>(false);

  size = input<ButtonSize>('md');

  textOnly = input<boolean>(false);

  buttonClick = output<void>();

  loading = input<boolean>(false);

  buttonClass = computed(() => {
    const style = BUTTON_STYLE[this.type()];

    return cx('rounded-md cursor-pointer', BUTTON_SIZE[this.size()], {
      // base
      [style.base]: !this.outline() && !this.textOnly(),
      [style.baseHover]: !this.outline() && !this.disabled() && !this.textOnly(),

      // outline
      [style.outline]: this.outline() && !this.textOnly(),

      // text only
      [style.textOnly]: this.textOnly() && !this.outline(),

      [style.outlineHover]: (this.outline() || this.textOnly()) && !this.disabled(),

      // disabled
      [style.disabled]: this.disabled(),
    });
  });
}
