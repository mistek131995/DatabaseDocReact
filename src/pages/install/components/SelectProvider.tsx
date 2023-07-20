import {SelectInput} from "../../../components/inputs/select/SelectInput";
import {useRecoilValue} from "recoil";
import {installPageStore} from "../installPageStore";

export const SelectProvider = () => {
    const storeValue = useRecoilValue(installPageStore);

    return <div className="border">
        <SelectInput label="База данных:" name="databaseProvider" options={storeValue?.options}/>
    </div>
}