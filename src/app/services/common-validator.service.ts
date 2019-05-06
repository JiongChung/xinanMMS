import { Injectable } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class CommonValidatorService {

    constructor() { }

    /**校验手机**/
    phone(control: FormControl): any {
        let myReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
        let valid = myReg.test(control.value);
        return valid ? null : {phone : true};//如果valid是true 返回是null
    }

    stringPhone(value: any): any {
        let myReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
        let valid = myReg.test(value);
        return valid;
    }

    /**校验正数，不含小数，不含0，且必填**/
    int(control: FormControl): any {
        let myReg = /^[0-9]*[1-9][0-9]*$/;
        let valid = myReg.test(control.value);
        return valid ? null : {int : true};
    }

    intNotRequired(control: FormControl): any {
        let myReg = /^[0-9]*[1-9][0-9]*$/;
        let valid = control.value ? myReg.test(control.value) : true;
        return valid ? null : {intNotRequired : true};
    }

    /**校验浮点数**/
    float(control: FormControl): any {
        var myreg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
        let valid = myreg.test(control.value);
        return valid ? null : {float : true};
    }

    /**校验url**/
    url(control: FormControl): any {
        var myreg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        let valid = myreg.test(control.value);
        return valid ? null : {url : true};
    }

    /**校验email**/
    email(control: FormControl): any {
        let myreg = /^[\w-']+([\.\+][\w-']+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,8}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
        let valid = myreg.test(control.value.replace(/(^\s*)|(\s*$)/g, ""));
        return valid ? null : {email : true};
    }

    /**校验密码 8-20位包含字母与数字的值 **/
    passWord(control: FormControl): any {
        var myreg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/;
        let valid = myreg.test(control.value);
        return valid ? null : {passWord : true};
    }

    /**校验正数，含小数，且必填**/
    positiveNumber(control: FormControl): any {
        let myReg = /^\d+(?=\.{0,1}\d+$|$)/;
        let valid = myReg.test(control.value);
        return valid ? null : {positiveNumber : true};
    }

    /**校验正数，含小数，且非必填**/
    positiveNumberAndNotRequired(control: FormControl): any {
        let myReg = /^\d+(?=\.{0,1}\d+$|$)/;
        let valid = control.value ? (myReg.test(control.value) ? true : false) : true;
        return valid ? null : {positiveNumberAndNotRequired : true};
    }

    /**校验0-100的数字，且非必填**/
    withinHundredAndNotRequired(control: FormControl): any {
        let valid = control.value ? ((100 >= control.value && control.value >= 0) ? true : false) : true;
        return valid ? null : {withinHundredAndNotRequired : true};
    }

    /**校验0-100的数字，含小数，且必填**/
    withinHundred(control: FormControl): any {
        let myReg = /^(\d|[1-9]\d|100)(\.\d{1,2})?$/;
        let valid = myReg.test(control.value);
        console.log(valid);
        console.log(control.value)
        return valid ? null : {withinHundred : true};
    }

    /**校验是否为图片路径**/
    ISPicture(value): any {
        let myReg = /\.(png|jpe?g|gif|svg)(\?.*)?$/;
        let valid = myReg.test(value);
        return valid ? true : false;
    }

    moreThanZero(control: FormControl): any {
        let myReg = /^[1-9]\d*$|^[1-9]\d*\.\d\d?$|^0\.\d\d?$/;
        // let valid = control.value ? ((control.value > 0) ? true : false) : false;
        let valid = myReg.test(control.value);
        return valid ? null : {moreThanZero : true};
    }
}
