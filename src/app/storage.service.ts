import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  setValue(key, value): void {
    console.log(`Key: ${key}, Value: ${value}`);
    this.storage.set(key, value);
  }

  getValue(key): string {
    return this.storage.get(key);
  }

}
