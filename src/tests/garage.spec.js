import { expect } from '@playwright/test';

import { test } from '../fixtures/test.fixtures';

test.describe("Check the garage page view", ()=> {
    test.only("test", async ({ garagePage }) => {

        await garagePage.navigate('');
        expect(await garagePage.getMainTitle()).toBe('test');
        expect(await garagePage.getPageUrl()).toContain('/garage');
    })
});