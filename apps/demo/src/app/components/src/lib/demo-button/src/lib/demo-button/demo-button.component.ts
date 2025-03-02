import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxAtlasUiButtonComponent } from '@mzkmnk-lab/ngx-atlas-ui';

@Component({
  selector: 'lib-demo-button',
  imports: [CommonModule, NgxAtlasUiButtonComponent],
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
        <p>The default button component is a simple button</p>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button>Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Disabled</h3>
        <p>The disabled button component is a simple button</p>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [disabled]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>

      <div class="flex gap-4 flex-col">
        <h3 class="text-lg font-bold">Loading</h3>
        <p>The loading button component is a simple button</p>
        <div class="flex items-center justify-center border border-gray-200 rounded-md p-4">
          <ngx-atlas-ui-button [loading]="true">Button</ngx-atlas-ui-button>
        </div>
      </div>
    </div>
  `,
})
export class DemoButtonComponent implements OnInit {
  private readonly router = inject(Router);

  urls: string[] = [];

  ngOnInit() {
    this.urls = this.router.url.split('/');
  }
}
