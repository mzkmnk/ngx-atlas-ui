import { DOCUMENT } from '@angular/common';
import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

type LoadingSize = 'sm' | 'md' | 'lg';

const LOADING_SIZE: Record<LoadingSize, { height: string; width: string }> = {
  sm: { height: '12px', width: '12px' },
  md: { height: '16px', width: '16px' },
  lg: { height: '20px', width: '20px' },
};

@Directive({
  selector: '[ngxAtlasUiLoading]',
})
export class NgxAtlasUiLoadingDirective {
  private readonly elementRef = inject(ElementRef);

  private readonly renderer = inject(Renderer2);

  private readonly document = inject(DOCUMENT);

  loadingSize = input<LoadingSize>('md');

  constructor() {
    this.setKeyframes();

    this.renderer.addClass(this.elementRef.nativeElement, 'ngx-atlas-loading');

    effect(() => {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', LOADING_SIZE[this.loadingSize()].width);
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', LOADING_SIZE[this.loadingSize()].height);
    });
  }

  private setKeyframes(): void {
    const style = this.renderer.createElement('style');

    style.textContent = `
    .ngx-atlas-loading {
            animation-name: ngx-atlas-ui-loading-animation;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          @keyframes ngx-atlas-ui-loading-animation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }`;

    this.renderer.appendChild(this.document.head, style);
  }
}
