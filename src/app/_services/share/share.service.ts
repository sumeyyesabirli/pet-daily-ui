import { Injectable } from '@angular/core';
import { HttpClientService } from '../base-http-client.service';
import { Share } from 'src/app/_models/share/share';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private controllerName = "/Share";

constructor(private httpService: HttpClientService) { }

addShare(data: Share) {
  return this.httpService.post(this.controllerName, data);
}

}
