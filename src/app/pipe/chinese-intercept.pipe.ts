import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chineseIntercept'
})
export class ChineseInterceptPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if(value != null){
            if(args != undefined){
                if(value.length > args){
                    value = value.substr(0,args);
                }
            }
        }
        return value;
    }

}
