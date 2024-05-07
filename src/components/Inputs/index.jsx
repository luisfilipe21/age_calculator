import { forwardRef } from "react"
import style from "./style.module.scss"

export const Input = forwardRef(({ errors, label, ...rest}, ref) => {
    // console.log({...rest})
    // console.log(errors)

    return (

        <div className={style.inputform}>
            <label>{label}</label>
            <input
                ref={ref}
                {...rest}
                className="input" 
                />
            {errors ? <p>{errors.message}</p> : null}
        </div>

    )
})