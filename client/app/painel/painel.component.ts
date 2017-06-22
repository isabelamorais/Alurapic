import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit{
    
    @Input() titulo: string; //a tipagem é opcional

    ngOnInit(){ // executa o conteúdo depois que as propriedades são passadas
        this.titulo = this.titulo.length>7 ? this.titulo.substr(0,7) + '...' : this.titulo;
    }

}