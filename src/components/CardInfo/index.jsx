import { useContext } from "react"
import { FromContext } from "../../controller/Controller"
import style from "./style.module.scss"


export const CardInfo = () => {
    const {years, months, days } = useContext(FromContext)

    if (years == NaN || months == NaN || days == NaN) {
        years = "- -";
        months = "- -";
        days = "- -";
    }

    return (
        <div className={style.info}>
            <div>
                <p><span>{years ? years : "- -"} </span> years</p>
            </div>
            <div>
                <p><span>{months ? months : "- -"}</span> months</p>
            </div>
            <div>
                <p><span>{days ? days : "- -"}</span> days</p>
            </div>
        </div>
    )
}