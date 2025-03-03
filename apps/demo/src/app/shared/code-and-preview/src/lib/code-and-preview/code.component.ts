import { Component } from '@angular/core';

@Component({
  selector:'ngx-atlas-code',
  template:`
    <div class="flex gap-2 items-center">
    <ng-content />
    </div>
  `
})
export class CodeComponent {}