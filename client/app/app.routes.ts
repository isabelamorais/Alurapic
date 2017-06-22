import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent }, //localhost:3000/cadastro
    { path: '**', component: ListagemComponent}
];

export const routing = RouterModule.forRoot(appRoutes);