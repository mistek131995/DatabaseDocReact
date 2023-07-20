import {IUseFetch, method} from "./IUseFetch";

export const useFetch = () => {
    const sendFetch = async (props: IUseFetch) => {
        return await fetch(`http://localhost:5000${props.url}`,{
            method: props.method,
            headers: {
                "Content-Type": "application/json",
                //"Authorization": "Bearer " + token,
            },
            body: JSON.stringify(props.body)
        }).then(response => {
            if (props.method === method.post) //Для POST нам ничего не нужно возвращать, обработка вся здесь.
            {
                if (response.status === 200) //Если успешно, показываем сообщение
                {
                    response.json().then(data => {
                        //setNotification({message: data.message, type: Type.success});
                        props.doAfterFetch?.();
                        return false;
                    })
                } else if (response.status === 401) //Если 401, чистим аутентификацию
                {
                    //loginOut();
                    return false;
                }

            } else //Если GET нужно вернуть JSON.
            {
                return response.json();
            }
        })
    }

    return {sendFetch}
}