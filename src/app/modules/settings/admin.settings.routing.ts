import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasesettingsComponent } from './basesettings/basesettings.component';
import { SystemdocumentationComponent } from './systemdocumentation/systemdocumentation.component';

const routes : Routes = [
    {
        path: '', 
        component: HomeComponent,
        children: [
            { path: 'systemdocumentation', component: SystemdocumentationComponent },
            { path: '**', redirectTo: 'systemdocumentation' }
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
