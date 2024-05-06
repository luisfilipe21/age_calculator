import style from "./style.module.scss"


export const CardInfo = () => {

    return (
        <div className={style.info}>
            <div>
                <p><span>Anos</span> years</p>
            </div>
            <div>
                <p><span>Meses</span> months</p>
            </div>
            <div>
                <p><span>Dias</span> days</p>
                </div>
        </div>
    )
}