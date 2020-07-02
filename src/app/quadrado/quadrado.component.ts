import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  template: `
  <button nbButton *ngIf="!value"> {{value}} </button>
  <button nbButton hero status="sucess" *ngIf="value== 'X'"> {{value}} </button>
  <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class QuadradoComponent{
  
@Input () value: 'X' | 'O';
  }

