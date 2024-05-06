import { Input } from "../Inputs"
import { useForm } from "react-hook-form"
import { formCheckDateSchema } from "../Inputs/formCheckDateSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import style from "./style.module.scss"


export const Form = () => {

    const { handleSubmit } = useForm({
        resolver: zodResolver(formCheckDateSchema),
    })

    const submit = () => {

    }

    return (
        <div className={style.divForm}>
            <form 
            onSubmit={() => handleSubmit(submit)} 
            className={style.form}>
                <Input 
                id="day"
                type="string"
                placeholder="DD"
                name={"DAY"}
                />

                <Input 
                name={"MONTH"}
                id="month"
                type="string"
                placeholder="MM"
                />

                <Input 
                name={"YEAR"}
                id="year"
                type="string"
                placeholder="YYYY"
                />
                
                <button className={style.button} type="submit">
                    <img src="src/assets/images/icon-arrow.svg" alt="Submit" />
                </button>
            </form>
            <hr />
        </div>
    )
}