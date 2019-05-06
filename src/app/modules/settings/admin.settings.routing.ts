import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasesettingsComponent } from './basesettings/basesettings.component';

const routes : Routes = [
    {
        path: '', 
        component: HomeComponent,
        children: [
            { path: 'basesettings', component: BasesettingsComponent },
            { path: '**', redirectTo: 'basesettings' }
        ]
    }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    imports: [
        routing
    ],
    exports: [
        RouterModule
    ]
})
export class SettingsRoutingModule { }
