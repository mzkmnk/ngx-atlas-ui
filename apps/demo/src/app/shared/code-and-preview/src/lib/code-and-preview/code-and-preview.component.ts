import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-and-preview',
  imports: [CommonModule, NgxAtlasUiButtonComponent, Highlight],
  template: `
    <div class="flex flex-col gap-3 w-full">
      <ng-content select="app-code-and-preview-title"></ng-content>

      <!-- toggle -->
      <div class="flex gap-4 items-center">
        <ngx-atlas-ui-button (buttonClick)="onClickToggle('preview')" [outline]="isPreview()" [textOnly]="!isPreview()">Preview</ngx-atlas-ui-button>
        <ngx-atlas-ui-button (buttonClick)="onClickToggle('code')" [outline]="!isPreview()" [textOnly]="isPreview()">Code</ngx-atlas-ui-button>
      </div>

      <!-- separator -->
      <div class="border-b border-gray-200 my-2"></div>

      @if (isPreview()) {
      <!-- preview -->
      <div class="flex items-center justify-center border gap-2 border-gray-200 rounded-md p-4">
        <ng-content select="app-code" />
      </div>
      } @else {
      <!-- code -->
      <pre><code class="text-sm rounded-xl" [highlight]="code()" language="html"></code></pre>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeAndPreviewComponent {
  code = input.required<string>();

  isPreview = signal<boolean>(true);

  onClickToggle = (which: 'code' | 'preview'): void => {
    if (which === 'preview') {
      this.isPreview.set(true);
      return;
    }

    this.isPreview.set(false);
  };
}
