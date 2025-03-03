import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
import { Router } from '@angular/router';
@Component({
  selector: 'app-overview',
  imports: [CommonModule, NgxAtlasUiButtonComponent],
  template: `
    <div class="flex flex-col gap-4 w-full h-full">
      <h2 class="text-2xl font-bold">Overview</h2>

      <!-- TODO: change card components -->
      <div class="grid grid-cols-3 gap-2">
        <!-- button -->
        <button class="w-full h-72 border border-slate-200 rounded-md cursor-pointer p-2" (click)="onClickComponent('button')">
          <div class="flex flex-col items-center justify-around gap-2 h-full w-full">
            <div class="flex items-center justify-center h-1/2">
              <ngx-atlas-ui-button type="primary">
                <p>Button</p>
              </ngx-atlas-ui-button>
            </div>
            <div class="flex flex-col gap-2 justify-center items-start border-t border-slate-200 pt-2 h-1/2">
              <p class="text-lg font-bold">Button</p>
              <p class="text-sm text-slate-500 text-left">The button component is a simple button that can be used to trigger actions in your application.</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  `,
})
export class OverviewComponent {
  private readonly router = inject(Router);

  onClickComponent(component: string) {
    this.router.navigate([`/components/${component}`]);
  }
}
