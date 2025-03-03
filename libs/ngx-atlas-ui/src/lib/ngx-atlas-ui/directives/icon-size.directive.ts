import { DOCUMENT } from '@angular/common';
import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

type LoadingSize = 'sm' | 'md' | 'lg';

const LOADING_SIZE: Record<LoadingSize, { height: string; width: string }> = {
  sm: { height: '12px', width: '12px' },
  md: { height: '16px', width: '16px' },
  lg: { height: '20px', width: '20px' },
};

@Directive({
  selector: '[ngxAtlasIconSize]',
})
export class NgxAtlasIconSizeDirective {
  private readonly elementRef = inject(ElementRef);

  private readonly renderer = inject(Renderer2);

  private readonly document = inject(DOCUMENT);

  loadingSize = input<LoadingSize>('md');

  constructor() {
    effect(() => {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', LOADING_SIZE[this.loadingSize()].width);
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', LOADING_SIZE[this.loadingSize()].height);
    });
  }
}
