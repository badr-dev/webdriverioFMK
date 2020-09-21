const assert = require('assert');

describe('test populate field on www.google.fr demo page', () => {

    beforeEach(function(){
        browser.url('https://www.google.fr/');
    });

    it('should leet you type into a form', () => {

        $('[name="q"]').setValue('Nouara');
        browser.keys("\uE007"); 

        browser.pause(5000)

        const url = browser.getUrl();

        assert(url.includes('tasd'));
    })

    it('should leet you type into a form', () => {

        $('[name="q"]').setValue('toto');
        browser.keys("\uE007"); 

        browser.pause(5000)

        const url = browser.getUrl();

        assert(url.includes('toto'));
    })
})