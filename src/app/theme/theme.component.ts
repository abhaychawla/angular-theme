import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { StorageService } from '../storage.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  theme: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.theme = new FormControl();
    this.theme.value = this.storageService.getValue("theme");
  }

}
