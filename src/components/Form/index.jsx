import { Input } from "../Inputs"
import { useForm } from "react-hook-form"
import style from "./style.module.scss"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./formSchema"
import { FromContext } from "../../controller/Controller"
import { useContext } from "react"


export const Form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    const { setFormData } = useContext(FromContext)


    const submit = (data) => {
        setFormData(data)
    }


    return (
        <div className={style.divForm}>
            <form
                onSubmit={handleSubmit(submit)}
                className={style.form}>
                <Input
                    type="number"
                    placeholder="DD"
                    label="DAY"
                    {...register("day")}
                    max={31}
                    min={1}
                    errors={errors.day}
                />

                <Input
                    type="number"
                    placeholder="MM"
                    label="MONTH"
                    max={12}
                    min={1}
                    {...register("month")}
                    errors={errors.month}
                />

                <Input
                    type="number"
                    label="YEAR"
                    placeholder="YYYY"
                    {...register("year")}
                    errors={errors.year}
                    min={1900}
                    max={2100}
                />

                <button className={style.button} type="submit">
                    <img src="src/assets/images/icon-arrow.svg" alt="Submit" />
                </button>
            </form>
            <hr />
        </div>
    )
}