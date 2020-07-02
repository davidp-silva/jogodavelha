import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {

  quadrados : string[];
  xIsNext : boolean;
  winner : string;
  constructor() { }

  ngOnInit(): void {
    this.novoJogo();
  }

  novoJogo()
  {
    this.quadrados = Array(9).fill(null);
    this.winner = null;
    this.xIsNext =true;
  }

  get player()
  {
    return this.xIsNext ? 'X' : 'O';
  }
  fazerJogada(idx : number)
  {
    if(!this.quadrados[idx])
    {
      this.quadrados.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.verificaVencedor();
   
  }
  verificaVencedor()
  {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i = 0; i < lines.length;i++)
    {
      const [a,b,c] = lines[i];
      if(this.quadrados[a] && this.quadrados[a]===this.quadrados[b]
        && this.quadrados[a] === this.quadrados[c]) 
        {
          return this.quadrados[a];
        }}
      return null
      }
    }