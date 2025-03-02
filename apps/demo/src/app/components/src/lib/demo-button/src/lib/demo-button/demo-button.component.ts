import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'lib-demo-button',
  imports: [CommonModule, NgxAtlasUiButtonComponent, Highlight],
  template: `
    <div class="flex flex-col gap-8">
      <div class="flex gap-1">
        @for(url of urls; track url; let i = $index; let isFirst = $first; let isLast = $last) {
        <p [class.text-gray-500]="!isLast">{{ url }}</p>
        @if(!isFirst && !isLast) {
        <p>/</p>
        } }
      </div>

      <div class="flex gap-2 flex-col">
        <h2 class="text-2xl font-bold">Button</h2>
        <p class="text-gray-500">The button component is a simple button that can be used to trigger actions in your application.</p>
      </div>

      <!-- example -->
      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Default</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Outline</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [outline]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Disabled</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
        </div>
        <pre><code class="text-sm rounded-xl" [highlight]="disabledCode" language="typescript"></code></pre>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Loading</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Rounded</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [rounded]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Text Only</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [textOnly]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Link</h3>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [link]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Size</h3>
        <div class="flex items-center  gap-3 justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button size="sm">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="md">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button size="lg">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Type</h3>
        <div class="flex items-center  gap-3 justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button type="primary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="secondary">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="danger">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="warn">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="success">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="info">Button</ngx-atlas-ui-button>
          <ngx-atlas-ui-button type="help">Button</ngx-atlas-ui-button>
        </div>
      </div>
    </div>
  `,
})
export class DemoButtonComponent implements OnInit {
  private readonly router = inject(Router);

  urls: string[] = [];

  disabledCode = `
  import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';
  
  <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
  `;

  ngOnInit() {
    this.urls = this.router.url.split('/');
  }
}
