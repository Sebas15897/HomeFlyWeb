import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/templates/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, // Usar el componente layout
        children: [
            {
                path: '',
                loadChildren: () =>
                import('./pages/templates/home/home.module').then(
                    (module) => module.HomeModule
                ),
            },
            {
                path: 'home',
                loadChildren: () =>
                import('./pages/templates/home/home.module').then(
                    (module) => module.HomeModule
                ),
            },
          // Otras rutas
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
