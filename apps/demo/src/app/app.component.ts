import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';

@Component({
  imports: [RouterModule, NgxAtlasUiButtonComponent],
  selector: 'app-root',
  template: `
    <div class="flex flex-col gap-4 m-3">
      <h2 class="text-2xl font-bold">Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary"> Primary </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="secondary"> Secondary </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="success"> Success </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="info"> Info </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="warn"> Warn </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="help"> Help </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="danger"> Danger </ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Disabled Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" [disabled]="true">Primary</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="secondary" [disabled]="true">Secondary</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="success" [disabled]="true">Success</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="info" [disabled]="true">Info</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="warn" [disabled]="true">Warn</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="help" [disabled]="true">Help</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="danger" [disabled]="true">Danger</ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Outline Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" [outline]="true"> Primary </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="secondary" [outline]="true"> Secondary </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="success" [outline]="true"> Success </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="info" [outline]="true"> Info </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="warn" [outline]="true"> Warn </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="help" [outline]="true"> Help </ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="danger" [outline]="true"> Danger </ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Disabled Outline Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" [outline]="true" [disabled]="true">Primary</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="secondary" [outline]="true" [disabled]="true">Secondary</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="success" [outline]="true" [disabled]="true">Success</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="info" [outline]="true" [disabled]="true">Info</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="warn" [outline]="true" [disabled]="true">Warn</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="help" [outline]="true" [disabled]="true">Help</ngx-atlas-ui-button>

        <ngx-atlas-ui-button type="danger" [outline]="true" [disabled]="true">Danger</ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Size Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" size="sm"> Small </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="primary" size="md"> Medium </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="primary" size="lg" (buttonClick)="onCLick()"> Large </ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Text Only Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" [textOnly]="true"> Primary </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="secondary" [textOnly]="true"> Secondary </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="success" [textOnly]="true"> Success </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="info" [textOnly]="true"> Info </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="warn" [textOnly]="true"> Warn </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="help" [textOnly]="true"> Help </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="danger" [textOnly]="true"> Danger </ngx-atlas-ui-button>
      </div>

      <h2 class="text-2xl font-bold">Loading Button</h2>
      <div class="flex gap-2">
        <ngx-atlas-ui-button type="primary" [loading]="true"> Primary </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="secondary" [loading]="true"> Secondary </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="success" [loading]="true"> Success </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="info" [loading]="true"> Info </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="warn" [loading]="true"> Warn </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="help" [loading]="true"> Help </ngx-atlas-ui-button>
        <ngx-atlas-ui-button type="danger" [loading]="true"> Danger </ngx-atlas-ui-button>
      </div>
    </div>
  `,
})
export class AppComponent {
  onCLick = () => {
    console.log('clicked');
  };
}
