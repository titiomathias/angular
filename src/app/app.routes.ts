import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home.component';
import { LoginComponent } from './login/components/login.component';
import { NewsComponent } from './news/components/news.component';
import { PainelSecretoComponent } from './painel-secreto/painel-secreto.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "news/:id", component: NewsComponent},
    {path: "painel", component: PainelSecretoComponent}
];

