import { CardInfo } from "./CardInfo"
import { Form } from "./Form"
import style from "./style.module.scss"

export const Card = () => {
    return (
        <div className="container ">
            <div className={style.card}>
                <div>
                    <Form />
                </div>
                <div className={style.cardInfo}>
                    <CardInfo />
                </div>
            </div>
        </div>
    )
}