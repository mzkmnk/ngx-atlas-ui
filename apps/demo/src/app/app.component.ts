import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';

@Component({
  imports: [RouterModule, NgxAtlasUiButtonComponent],
  selector: 'app-root',
  template: `
    <h1 class="text-3xl font-bold underline">
      {{ title }}
    </h1>
    <div>
      <ngx-atlas-ui-button></ngx-atlas-ui-button>
    </div>
  `
})
export class AppComponent {
  title = 'demo';
}
