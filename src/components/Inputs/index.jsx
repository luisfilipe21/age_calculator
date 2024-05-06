import { forwardRef } from "react"
import style from "./style.module.scss"

export const Input = forwardRef(({errors, ...rest}, ref) => {

    return (

        <div className={style.inputform}>
            <label ref={ref} >{rest.name}</label>
            <input  
            ref={ref}
            {...rest }
            className="input" />
        </div>

    )
})