import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/templates/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
        import('./pages/templates/home/home.module').then(
            (module) => module.HomeModule
        ),
    },
    {
        path: '**',
        redirectTo: 'classic',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
