import { Component } from '@angular/core';

@Component({
  selector:'app-code',
  template:`
    <div class="flex gap-2 items-center">
    <ng-content />
    </div>
  `
})
export class CodeComponent {}