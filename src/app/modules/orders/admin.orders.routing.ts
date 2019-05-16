import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { PayrecordComponent } from './payrecord/payrecord.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'orderlist', component: OrderlistComponent},
            {path: 'payrecord', component: PayrecordComponent},
            {path: '**', redirectTo: 'orderlist'}
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
export class OrdersRoutingModule {
}
