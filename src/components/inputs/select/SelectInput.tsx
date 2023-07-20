import {ISelectInput} from "./ISelectInput";
import {FormGroup, FormLabel} from "react-bootstrap";
import {useFormContext} from "react-hook-form";
import {Controller} from "react-hook-form";
import Select from "react-select";

export const SelectInput = (props: ISelectInput) => {
    const {control} = useFormContext();
    return <FormGroup>
        <FormLabel>{props.label}</FormLabel>
        <Controller render={({field}) =>
            <Select {...field} options={props.options}/>
        } name={props.name} control={control}/>
    </FormGroup>
}