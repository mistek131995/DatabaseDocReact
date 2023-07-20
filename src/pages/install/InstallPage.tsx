import {useEffect, useState} from "react";
import {SelectProvider} from "./components/SelectProvider";
import "./install-page.css";
import {FormProvider, useForm} from "react-hook-form";
import {Form} from "react-bootstrap";
import {useFetch} from "../../hooks/useFetch/useFetch";
import {method} from "../../hooks/useFetch/IUseFetch";
import {IInstallPage} from "./IInstallPage";
import {useSetRecoilState} from "recoil";
import {installPageStore} from "./installPageStore";

export const InstallPage = () => {
    const hookForm = useForm();
    const [stepNumber, setStepNumber] = useState(0);
    const {sendFetch} = useFetch();
    const [model, setModel] = useState<IInstallPage>();
    const setStore = useSetRecoilState(installPageStore);

    useEffect(() => {
        sendFetch({url: "/Install/Index", method: method.get, doAfterFetch: null})
            .then(response => setStore(response))
    }, [])

    console.log(model?.options)
    return <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <FormProvider {...hookForm}>
            <Form>
                {stepNumber === 0 &&
                    <SelectProvider/>
                }

                {stepNumber === 2 &&
                    <SelectProvider/>
                }
            </Form>
        </FormProvider>
    </div>
}