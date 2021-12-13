import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  getNoticias(parametros:any){
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais +'&category=' + parametros.categoria + '&apiKey=3cc2d474539c498b951f823fc37b1127';
    
  }

  constructor() { }
}
