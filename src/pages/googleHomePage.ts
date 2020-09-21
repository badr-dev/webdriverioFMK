import { assert } from 'chai';

class GoogleHomePage {

    private _url: string = 'http://google.fr/';
    private _queryField: string = 'input[name="q"]';
    private _submitBtn: string = 'input[name="btnK"]';
    private _acceptCookies: string = '#introAgreeButton';
    
    public static EnterKey: string = "\uE007";

    public startPage(): void {
        browser.url(this._url);
        
        if ( $('body iframe').waitForExist({ timeout: 5000 }) ) {

            browser.switchToFrame($('body iframe'));
            $(this._acceptCookies).click();
        }
    }

    public populate(keyword: string): void {
        $(this._queryField).setValue(keyword);
    }

    public submit(): void {
        browser.keys(GoogleHomePage.EnterKey);
    }

    public checkResult(keyword: string) {
        browser.pause(7000);
        assert(browser.getUrl().includes(keyword));
    }
}

export default new GoogleHomePage();