import React, { useState } from "react";

const FormBuyer = ({ createOrder }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <div className="formContainer">
            <h2 className="formTitle">Datos de Contacto</h2>
            <form className="formContainerInput">
                <div className="formInput">
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text" required/><strong>*</strong>
                </div>
                <div className="formInput">
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text" required/><strong>*</strong>
                </div>
                <div className = "formInput">
                    <input placeholder="E-mail" name="email" value={form.email} onChange={getContactData} type="email" required/><strong>*</strong>
                </div>
                <div className="formInput">
                    <input placeholder="Confirma E-mail" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email" required/><strong>*</strong>
                </div>
            </form>
            <button type="submit" className="finishShop" disabled={disabled} onClick={finalizePurchase}>Comprar</button>
            <h5>* Campos obligatorios</h5>  
        </div>
    )
}

export default FormBuyer