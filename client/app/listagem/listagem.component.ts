import {Component, Inject} from '@angular/core';
import { Http } from '@angular/http'; //faz requisições ajax

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: Object[] = [];
    
    constructor(http: Http){
        let stream = http
        .get('v1/fotos')
        .map(res => res.json())
        .subscribe(fotos => {

            this.fotos = fotos;
            console.log(this.fotos);

        }, erro => console.log(erro));
    }
}