import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
import { Highlight } from 'ngx-highlightjs';
import { CodeAndPreviewComponent, CodeAndPreviewTitleComponent, CodeComponent } from '@ngx-atlas-ui/shared/codd-and-preview';

@Component({
  selector: 'app-demo-button',
  imports: [CommonModule, NgxAtlasUiButtonComponent, Highlight, CodeAndPreviewComponent, CodeAndPreviewTitleComponent, CodeComponent],
  template: `
    <div class="flex flex-col gap-8">
      <div class="flex gap-1">
        @for (url of urls; track url; let i = $index; let isFirst = $first; let isLast = $last) {
        <p [class.text-gray-500]="!isLast">{{ url }}</p>
        @if (!isFirst && !isLast) {
        <p>/</p>
        } }
      </div>

      <div class="flex gap-2 flex-col">
        <h2 class="text-2xl font-bold">Button</h2>
        <p class="text-gray-500">The button component is a simple button that can be used to trigger actions in your application.</p>
      </div>

      <div class="flex gap-2 flex-col">
        <h3 class="text-xl font-bold">Import</h3>
        <pre><code class="text-sm rounded-xl" [highlight]="importCode" language="typescript"></code></pre>
      </div>

      <!-- example -->

      <app-code-and-preview [code]="code">
        <app-code-and-preview-title>Default</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="outlineCode">
        <app-code-and-preview-title>Outline</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [outline]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="disabledCode">
        <app-code-and-preview-title>Disabled</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="loadingCode">
        <app-code-and-preview-title>Loading</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="roundedCode">
        <app-code-and-preview-title>Rounded</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [rounded]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="textCode">
        <app-code-and-preview-title>Text</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [textOnly]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="linkCode">
        <app-code-and-preview-title>Link</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button [link]="true">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="sizeCode">
        <app-code-and-preview-title>Size</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button size="sm">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="md">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="lg">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>

      <app-code-and-preview [code]="typeCode">
        <app-code-and-preview-title>Type</app-code-and-preview-title>
        <app-code>
          <ngx-atlas-ui-button type="primary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="secondary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="danger">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="warn">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="success">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="info">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="help">Button</ngx-atlas-ui-button>
        </app-code>
      </app-code-and-preview>
    </div>
  `,
})
export class DemoButtonComponent implements OnInit {
  urls: string[] = [];

  importCode = `
  import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
  `;

  code = `
  <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
  `;

  outlineCode = `
  <ngx-atlas-ui-button [outline]="true">Button</ngx-atlas-ui-button>
  `;

  disabledCode = `
  <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
  `;

  loadingCode = `
  <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
  `;

  roundedCode = `
   <ngx-atlas-ui-button [rounded]="true">Button</ngx-atlas-ui-button>
  `;

  textCode = `
  <ngx-atlas-ui-button [textOnly]="true">Button</ngx-atlas-ui-button>
  `;

  linkCode = `
  <ngx-atlas-ui-button [link]="true">Button</ngx-atlas-ui-button>
  `;

  sizeCode = `
  <ngx-atlas-ui-button size="sm">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button size="md">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button size="lg">Button</ngx-atlas-ui-button>
  `;

  typeCode = `
  <ngx-atlas-ui-button type="primary">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="secondary">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="danger">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="warn">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="success">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="info">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="help">Button</ngx-atlas-ui-button>
  `;

  private readonly router = inject(Router);

  ngOnInit() {
    this.urls = this.router.url.split('/');
  }
}
