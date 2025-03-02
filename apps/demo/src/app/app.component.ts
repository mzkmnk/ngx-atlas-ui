import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';

@Component({
  imports: [RouterModule, NgxAtlasUiButtonComponent],
  selector: 'app-root',
  template: `
    <div class="h-screen w-screen flex flex-col">
      <!-- header -->
      <header class="min-h-[4rem] w-full flex items-center justify-between px-2 sticky top-0 left-0 z-50">
        <h2 class="text-2xl font-bold">Ngx Atlas UI</h2>
      </header>
      <div class="h-full w-full flex px-2">
        <!-- sidebar -->
        <div class="h-full w-64 overflow-y-auto sticky top-0 left-0 z-40 flex flex-col gap-6">
          <div class="flex flex-col gap-1">
            <p class="font-bold">Getting This Library</p>
            <ngx-atlas-ui-button [link]="true" [type]="'primary'">
              <p>Installation</p>
            </ngx-atlas-ui-button>
          </div>

          <div class="flex flex-col gap-1">
            <p class="font-bold">Components</p>
            <ngx-atlas-ui-button [link]="true" [type]="'primary'" (buttonClick)="onClickNavigation('button')">
              <p>Button</p>
            </ngx-atlas-ui-button>
          </div>
        </div>
        <!-- content -->
        <div class="h-full flex-1 overflow-y-auto sticky top-0 left-0">
          <router-outlet />
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  private readonly router = inject(Router);

  onClickNavigation(path: string) {
    this.router.navigate([`components/${path}`]);
  }
}
