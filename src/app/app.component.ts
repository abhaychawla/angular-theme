import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Bootstrap Theme';
  loading:  boolean;
  themeConfiguration: boolean = false;
  theme: string;

  constructor(private router: Router, private renderer: Renderer2, private elRef: ElementRef, private storageService: StorageService) {  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.loading = true;
        if(!this.themeConfiguration) {
          this.theme = this.storageService.getValue('theme') || "default";
          this.renderer.setAttribute(this.elRef.nativeElement.ownerDocument.head.children[5], "href", `theme/bootstrap/${this.theme}.css`);
          this.storageService.setValue("theme", this.theme);
        }
      }
      else if(event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
        if(!this.themeConfiguration) {
          setTimeout(() => this.themeConfiguration = true, 1000);
        }
      }
    });

  }



}
