import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';

  listNoticias: any[] = [];

  loading = false;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticia(parametros:any){

    setTimeout(() => {
      this.loading = true;
      this.listNoticias = [];
      this._noticiaService.getNoticias(parametros).subscribe(data =>{
        this.listNoticias = data.articles;
        this.loading = false;
      }, error => {
        console.log(error)
        this.loading = false;
      })
    },1000);
  }
}
