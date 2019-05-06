import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CommonService {

    constructor() { }

    /** 修复moment方法保存时 自动减少8小时，这里补加8小时 **/
    formatDate(timesTamp: any){
        timesTamp = timesTamp + 1000*60*60*8;

        let newMoment = new Date(timesTamp);
        var Y = newMoment.getFullYear() + '-';
        var M = (newMoment.getMonth()+1 < 10 ? '0'+(newMoment.getMonth()+1) : newMoment.getMonth()+1) + '-';
        var D = ((newMoment.getDate() < 10) ? '0'+newMoment.getDate() : newMoment.getDate()) + 'T';
        var h = ((newMoment.getHours() < 10) ? '0'+newMoment.getHours() : newMoment.getHours()) + ':';
        var m = ((newMoment.getMinutes() < 10) ? '0'+newMoment.getMinutes() : newMoment.getMinutes()) + ':';
        var s = ((newMoment.getSeconds() < 10) ? '0'+newMoment.getSeconds() : newMoment.getSeconds()) + '+08:00';

        return Y+M+D+h+m+s;
    }

    setChartItemHeight(obj: any, chartHeight: number, topHeight?: number): void{
        if($(obj).length > 0){
            if(topHeight == undefined){
                topHeight = $(obj).offset().top;
            }
            // var topHeight = $(obj).offset().top;
            var footHeight = $('.m-footer').outerHeight();
            $(obj).css('height',chartHeight-topHeight-footHeight);
        }
    }

    resize(obj: any, height: number, topHeight?: number): void{
        $(window).resize(() => {
            if(topHeight == undefined){
                this.setChartItemHeight(obj, $(window).height() - height);
            }else{
                this.setChartItemHeight(obj, $(window).height() - height, topHeight);
            }
        });
    }

    checkSearchDate(startBtn: any, endBtn: any){
        let params: any = {};
        let startDate: any = '';
        let endDate: any = '';
        if(!$(startBtn).val()){
            startDate = '';
        }else{
            startDate = moment($(startBtn).data('DateTimePicker').date().format('YYYY-MM-DD'));
            // let startDates: any = moment($(startBtn).data('DateTimePicker').date().format('YYYY-MM-DDTHH:mm:ssZ'));
            // startDate = moment(this.formatDate(new Date(startDates).getTime()));
        }
          
        if(!$(endBtn).val()){
            endDate = '';
        }else{
            endDate = moment($(endBtn).data('DateTimePicker').date().format('YYYY-MM-DD'));
            // let endDates: any = moment($(endBtn).data('DateTimePicker').date().format('YYYY-MM-DDTHH:mm:ssZ'));
            // endDate = moment(this.formatDate(new Date(endDates).getTime()));
        }
        
        params.startDate = startDate;
        params.endDate = endDate;
        
        if($(startBtn).val() && $(endBtn).val()){
            if($(startBtn).val() == $(endBtn).val()){
                params.endDate = startDate;
            }
        }
        if(startDate && endDate){
            let start = startDate['_i'].split('T')[0] + ' ' + '00:00:00';
            let end = endDate['_i'].split('T')[0] + ' ' + '00:00:00';
            if(new Date(start).getTime() > new Date(end).getTime()){
                params.status = false;
                return params;
            }else{
                params.status = true;
                return params;
            }
        }else{
            params.status = true;
            return params;
        }
    }
}
