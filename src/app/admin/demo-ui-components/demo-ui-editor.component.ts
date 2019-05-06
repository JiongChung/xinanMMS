import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { DemoUiComponentsServiceProxy } from '@shared/service-proxies/service-proxies';

import {FileUploader, FileUploaderOptions} from '@node_modules/ng2-file-upload';
import {AppConsts} from '@shared/AppConsts';
import {IAjaxResponse} from '@abp/abpHttpInterceptor';
import {TokenService} from '@abp/auth/token.service';

@Component({
    selector: 'demo-ui-editor',
    templateUrl: './demo-ui-editor.component.html',
    animations: [appModuleAnimation()]
})

export class DemoUiEditorComponent extends AppComponentBase implements OnInit {

    htmlEditorInput: string;
    imageUploader: FileUploader;
    editor:any;

    constructor(
        injector: Injector,
        private demoUiComponentsService: DemoUiComponentsServiceProxy,
        private _tokenService: TokenService
    ) {
        super(injector);
    }

    ngOnInit(){
        this.imageUploader = this.createUploader(
            '/AliyunOSSFile/Upload?type=5',
            result => {
                let range = this.editor.getSelection(true);
                this.editor.insertEmbed(range.index, 'image', result.fileFullUrl);
            });
    }

    editorCreated(quill: any){
        this.editor = quill;
    }

    createUploader(type: string, success?: (result: any) => void): FileUploader {
        const uploader = new FileUploader({ url: AppConsts.remoteServiceBaseUrl + type });

        uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };

        uploader.onSuccessItem = (item, response, status) => {
            const ajaxResponse = <IAjaxResponse>JSON.parse(response);
            if (ajaxResponse.success) {
                if (success) {
                    success(ajaxResponse.result);
                }
            } else {
                this.message.error(ajaxResponse.error.message);
            }
        };

        const uploaderOptions: FileUploaderOptions = {};
        uploaderOptions.authToken = 'Bearer ' + this._tokenService.getToken();
        uploaderOptions.autoUpload = true;
        uploaderOptions.removeAfterUpload = true;
        uploaderOptions.maxFileSize = 1024*1024*10;//支持最大大小 单位：字节
        uploader.setOptions(uploaderOptions);
        return uploader;
    }

    

    // input mask - post
    submitValue(): void {

        this.demoUiComponentsService.sendAndGetValue(this.htmlEditorInput)
            .subscribe(data => {
                (abp as any).libs.sweetAlert.config.info.html = true;
                this.message.info(data.output, this.l('PostedValue'));
                this.notify.info(this.l('SavedSuccessfully'));
            });
    }
}
