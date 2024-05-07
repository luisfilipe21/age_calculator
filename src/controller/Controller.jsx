import { createContext, useEffect, useState } from "react"


export const FromContext = createContext({});

export const FormProvider = ({ children }) => {

    const [formData, setFormData] = useState({})

    const todaysDate = new Date();
    
    let years = todaysDate.getFullYear() - formData.year;
    let months = todaysDate.getMonth() - formData.month + 1;
    let days = todaysDate.getDate() - formData.day;
    
    if (months < 0 || (months === 0 && todaysDate.getDate() < formData.day)) {
        years--;
        months = 12 - Math.abs(months);
    }

    if (days < 0) {
        const lastDayLastMonth = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0).getDate();
        days = lastDayLastMonth - Math.abs(days);;
        months--;
    }

    if (months === 0 && days === 0) {
        months = 12;
        days--;
    }

    return (
        <FromContext.Provider value={{ setFormData, years, months, days, formData }}>
            {children}
        </FromContext.Provider>
    )
}