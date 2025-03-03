import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { cx } from '../../utils/cx';
import { ButtonType, ButtonSize, BUTTON_STYLE, BUTTON_SIZE } from './button';
import { provideTablerIcons, TablerIconComponent } from 'angular-tabler-icons';
import { IconLoader2 } from 'angular-tabler-icons/icons';
import { NgxAtlasIconSizeDirective } from '../../directives/icon-size.directive';

@Component({
  selector: 'ngx-atlas-ui-button',
  imports: [TablerIconComponent, NgxAtlasIconSizeDirective],
  providers: [
    provideTablerIcons({
      IconLoader2,
    }),
  ],
  template: `
    <button [class]="buttonClass()" (click)="buttonClick.emit()">
      <div class="flex items-center gap-1">
        @if(loading()){
        <i-tabler name="loader-2" class="animate-spin" ngxAtlasIconSize [loadingSize]="size()" />
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

  link = input<boolean>(false);

  buttonClick = output<void>();

  loading = input<boolean>(false);

  rounded = input<boolean>(false);

  buttonClass = computed(() => {
    const style = BUTTON_STYLE[this.type()];

    return cx('cursor-pointer', this.rounded() ? 'rounded-full' : 'rounded-md', BUTTON_SIZE[this.size()], {
      // base
      [style.base]: !this.outline() && !this.textOnly() && !this.link(),
      [style.baseHover]: !this.outline() && !this.disabled() && !this.textOnly() && !this.link(),

      // outline
      [style.outline]: this.outline() && !this.textOnly() && !this.link(),

      // text only
      [style.textOnly]: this.textOnly() && !this.outline() && !this.link(),

      [style.outlineHover]: (this.outline() || this.textOnly()) && !this.disabled() && !this.link(),

      // link
      [style.link]: this.link() && !this.outline() && !this.textOnly(),

      // disabled
      [style.disabled]: this.disabled(),
    });
  });
}
