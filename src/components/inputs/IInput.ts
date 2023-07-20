import {GroupBase, OptionsOrGroups} from "react-select";

export interface IInput
{
    label: string,
    name: string,
    options?: OptionsOrGroups<any, GroupBase<any>>,
}