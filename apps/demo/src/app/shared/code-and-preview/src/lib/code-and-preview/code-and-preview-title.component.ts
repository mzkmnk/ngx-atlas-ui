import { Component } from '@angular/core';

@Component({
  selector: 'app-code-and-preview-title',
  template: ` <h3 class="text-xl font-bold">
    <ng-content />
  </h3>`,
})
export class CodeAndPreviewTitleComponent {}
