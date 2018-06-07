import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

import { StorageService } from './storage.service';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  @Input('appTheme') theme: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private storageService: StorageService) { }

  @HostListener('change') onchange(): void {
    this.setTheme(this.theme.value);
  }

  private setTheme(theme: string): void {
    this.renderer.setAttribute(this.elementRef.nativeElement.ownerDocument.head.children[5], "href", `theme/bootstrap/${theme}.css`);
    this.storageService.setValue("theme", theme);
  }

}
