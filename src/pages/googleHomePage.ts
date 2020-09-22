import { assert } from 'chai';

class GoogleHomePage {

    private _url: string = 'http://google.fr/';
    private _queryField: string = 'input[name="q"]';
    private _submitBtn: string = 'input[name="btnK"]';
    private _acceptCookies: string = '#introAgreeButton';
    private _filterTab: string = '.hdtb-mitem.hdtb-imb a';

    public static EnterKey: string = "\uE007";

    public async startPage(): Promise<void> {

        (await browser.url(this._url));

        if ((await $('body iframe').waitForExist({ timeout: 5000 }))) {

            (await browser.switchToFrame($('body iframe')));
            $(this._acceptCookies).click();
        }
    }

    public async populate(keyword: string): Promise<void> {
        await $(this._queryField).setValue(keyword);
    }

    public async submit(): Promise<void> {
        await browser.keys(GoogleHomePage.EnterKey);
    }

    public async checkResult(keyword: string): Promise<void> {
        await browser.pause(7000);
        assert(browser.getUrl().includes(keyword));
    }

    public async checkFilterExist(filterName: string) : Promise<void>  {
        const elements = $$(this._filterTab).filter((item) =>
            (item
                .getText().toString()
                .toLowerCase()
                .trim()
                .includes(filterName.toLowerCase().trim())
            ));
            await elements[0].waitForDisplayed();
    }
}

export default new GoogleHomePage();