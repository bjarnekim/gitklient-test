import { Component, OnInit } from '@angular/core';
import { TstUdeService } from "./tst-ude.service";

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  sidebar <app-side-bar></app-side-bar>
  <hr>
  service:
  {{this.srvTxthilsen}}
  <br><button (click)='hentService()'>getData</button>
  {{getData}}
  `,
  styles: [],
  providers: [TstUdeService]
})

export class AppComponent {
  title = 'app works!';
  srvTxthilsen: string;
  getData: string;

  constructor (private udefra:TstUdeService) {}

  ngOnInit () {
    this.srvTxthilsen = this.udefra.txtHilsen();
    // this.srvTxthilsen = 'dav';
  }

  hentService() {
  	// alert('der skal hentes');
  	this.udefra.hentTid()
  		.subscribe(
  			data => this.getData = JSON.stringify(data),
  			error => alert(error),
  			() => console.log('faerdig')
  		);
  }

}
