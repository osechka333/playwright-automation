import {test as base} from "@playwright/test";
import GaragePage from '../pages/GaragePage';
import {STORAGE_STATE_USER_PATH} from "../data/storageState";

export const test = base.extend(({
    garagePage: async ({browser}, use)=>{
        const browserContext = await browser.newContext({
            storageState: STORAGE_STATE_USER_PATH
        });
        const page = await browserContext.newPage();
        const garagePage = new GaragePage(page);

        await use(garagePage);
    }
}))

