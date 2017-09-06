import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

@Injectable()
export class TstUdeService {

  constructor(private http:Http) { }

  txtHilsen() {
    return 'Dette er en teksthilsen fra service';
  }

  hentTid()  {
  	return this.http.get('http://date.jsontest.com/')
  		// .map((res:Response) => res.json());
  		.map(res => res.json());

  }

}
