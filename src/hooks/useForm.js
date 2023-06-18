import { useState } from "react"
import validator from 'validator';

const CheckForm = (data) => {
    let Errors = []
    if (!validator.isEmail(data.email)) {
        Errors.push("Invalid Email")
    }

    else if (data.text.length < 1) {
        Errors.push("Invalid Massage")
    }
    return Errors
}


const useForm = (UserDataForm) => {
    const [values, setValues] = useState(UserDataForm)

    return {
        values,
        HandelChange: (e) => {
            console.log(e.target.name)
            setValues({
                ...values,
                [e.target.name]: e.target.value

            })
        }
    }

}

export default useForm

export { CheckForm }