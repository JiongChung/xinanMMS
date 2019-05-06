import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
        children: [
            {path: 'userlist', component: UserlistComponent},
            {path: '**', redirectTo: 'userlist'}
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
export class ClientRoutingModule {
}
