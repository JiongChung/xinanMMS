import { Xdb } from './app.po';

describe('abp-zero-template App', function () {
    let page: Xdb;

    beforeEach(() => {
        page = new Xdb();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        page.getCopyright().then(value => {
            expect(value).toEqual(new Date().getFullYear() + ' © 销多宝.');
        });
    });
});
