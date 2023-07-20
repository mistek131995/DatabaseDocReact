import {atom} from "recoil";
import {IInstallPage} from "./IInstallPage"

export const installPageStore = atom<IInstallPage | null>({
    key: "installPageStore",
    default: null
})