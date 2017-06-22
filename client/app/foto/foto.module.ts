import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo], //o que faz parte do módulo
    exports: [FotoComponent, FiltroPorTitulo] //o que o módulo tem
})
export class FotoModule {}