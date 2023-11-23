import {test} from "@playwright/test";
import WelcomePage from "../pages/WelcomePage";
import {USER} from "../data/users";
import {STORAGE_STATE_USER_PATH} from "../src/data/storageState.js";

test("Login as user and save storage state", async ({page, context})=>{
    const welcomePage = new WelcomePage(page);
    await welcomePage.open();
    const signInPopUp = await welcomePage.openSignInModal();
    await signInPopUp.fillSignInModal(USER.email, USER.password);
    await signInPopUp.login();

    await context.storageState({
        path: STORAGE_STATE_USER_PATH
    })
})
