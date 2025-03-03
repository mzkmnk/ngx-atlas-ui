import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
import { Highlight } from 'ngx-highlightjs';
import {
  CodeAndPreviewComponent,
  CodeAndPreviewTitleComponent,
  CodeComponent
} from '@ngx-atlas-ui/shared/codd-and-preview';

@Component({
  selector: 'lib-demo-button',
  imports: [CommonModule, NgxAtlasUiButtonComponent,Highlight, CodeAndPreviewComponent,CodeAndPreviewTitleComponent,CodeComponent],
  template: `
    <div class="flex flex-col gap-8">
      <div class="flex gap-1">
        @for (url of urls; track url; let i = $index; let isFirst = $first; let isLast = $last) {
          <p [class.text-gray-500]="!isLast">{{ url }}</p>
          @if (!isFirst && !isLast) {
            <p>/</p>
          }
        }
      </div>

      <div class="flex gap-2 flex-col">
        <h2 class="text-2xl font-bold">Button</h2>
        <p class="text-gray-500">The button component is a simple button that can be used to trigger actions in your
          application.</p>
      </div>

      <div class="flex gap-2 flex-col">
        <h3 class="text-xl font-bold">Import</h3>
        <pre><code class="text-sm rounded-xl" [highlight]="importCode" language="typescript"></code></pre>
      </div>

      <!-- example -->

      <ngx-atlas-code-and-preview [code]="code">
        <ngx-atlas-code-and-preview-title>Default</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="outlineCode">
        <ngx-atlas-code-and-preview-title>Outline</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [outline]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="disabledCode">
        <ngx-atlas-code-and-preview-title>Disabled</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="loadingCode">
        <ngx-atlas-code-and-preview-title>Loading</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="roundedCode">
        <ngx-atlas-code-and-preview-title>Rounded</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [rounded]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="textCode">
        <ngx-atlas-code-and-preview-title>Text</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [textOnly]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>


      <ngx-atlas-code-and-preview [code]="linkCode">
        <ngx-atlas-code-and-preview-title>Link</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button [link]="true">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="sizeCode">
        <ngx-atlas-code-and-preview-title>Size</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button size="sm">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="md">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="lg">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>

      <ngx-atlas-code-and-preview [code]="typeCode">
        <ngx-atlas-code-and-preview-title>Type</ngx-atlas-code-and-preview-title>
        <ngx-atlas-code>
          <ngx-atlas-ui-button type="primary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="secondary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="danger">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="warn">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="success">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="info">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="help">Button</ngx-atlas-ui-button>
        </ngx-atlas-code>
      </ngx-atlas-code-and-preview>
    </div>
  `,
})
export class DemoButtonComponent implements OnInit {
  private readonly router = inject(Router);

  urls: string[] = [];

  importCode = `
  import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
  `

  code= `
  <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
  `;

  outlineCode = `
  <ngx-atlas-ui-button [outline]="true">Button</ngx-atlas-ui-button>
  `

  disabledCode = `
  <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
  `


  loadingCode = `
  <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
  `

  roundedCode = `
   <ngx-atlas-ui-button [rounded]="true">Button</ngx-atlas-ui-button>
  `

  textCode = `
  <ngx-atlas-ui-button [textOnly]="true">Button</ngx-atlas-ui-button>
  `

  linkCode = `
  <ngx-atlas-ui-button [link]="true">Button</ngx-atlas-ui-button>
  `

  sizeCode = `
  <ngx-atlas-ui-button size="sm">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button size="md">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button size="lg">Button</ngx-atlas-ui-button>
  `

  typeCode = `
  <ngx-atlas-ui-button type="primary">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="secondary">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="danger">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="warn">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="success">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="info">Button</ngx-atlas-ui-button>
  <ngx-atlas-ui-button type="help">Button</ngx-atlas-ui-button>
  `

  ngOnInit() {
    this.urls = this.router.url.split('/');
  }
}
