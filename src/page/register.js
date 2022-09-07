import React, { memo, useState } from "react";
import { Form, FormControl, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import counterSlice from "../reducer/reducer";
function Register() {
    const user = useSelector((state) => state.user)
    const dispart = useDispatch()
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    function check(item) {
        if (!item.email) {
            setErrorName('vui lòng nhập thông tin'); console.log('setname')
        }
        if (!item.email) {
            setErrorEmail('vui lòng nhập thông tin'); console.log('setemail')
        }
        if (!item.password) { setErrorPassword('vui lòng nhập thông tin'); console.log('setpassword') }
        if (!item.phone) { setErrorPhone('vui lòng nhập thông tin'); console.log('setphone') }
        if (user.length > 1 || user.findIndex((e) => e.email === item.email) >= 0) {
            setErrorEmail('Email đã được sử dụng')
        }
        else if (
            !errorName
            && !errorEmail
            && !errorPassword
            && !errorPhone
            && item.name
            && item.email
            && item.password
            && item.phone
        ) {
            dispart(counterSlice.actions.Onlogin(item))
            console.log('caapj nhaatj duwx lieeuj thanhf coong')
            console.log(item)

            pageNavigate('login')

        }
    }

    function handleSubmit(e) {
        const valueFrom = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            phone: +e.target[3].value,
        }
        check(valueFrom)
        console.log(valueFrom)
        e.preventDefault()
    }
    function handleChangeInput(e) {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)
        switch (name) {
            case 'name':
                if (value.length < 4) { setErrorName('Tên phải lớn hơn 4 kí tự') }
                else (setErrorName(''))
                break
            case 'email':
                const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email.test(value)) {
                    setErrorEmail('')
                } else { setErrorEmail('Email chưa đúng định dạng') }

                break
            case 'password':
                if (value.length >= 8) { setErrorPassword('') }
                else { setErrorPassword('password phải có từ 8 kí tự trở lên.') }
                break
            case 'phone':
                if (value.length >= 9) { setErrorPhone('') }
                else { setErrorPhone('số điện thoại phải có 10 số') }
                break
            default:
                console.log('lỗi case')
        }

    }
    return (
        <div className="constainer-fluid"
            style={{
                backgroundImage: 'url(../image/banner1.jpg)',
                padding: '45px 0px 45px 0px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
            }>
            <div style={{
                width: '35%',
                margin: ' auto',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '60px',

            }}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <h2 style={{
                        fontStyle: 'italic',
                        textAlign: 'center',
                        height: '100px',
                        padding: '0px 30px',
                        fontSize: '3.5rem',
                        fontWeight: '150',
                    }}>Sign Up</h2>
                    <FormControl
                        className={`formcontrol ${errorName && 'is-invalid'}`}
                        name="name"
                        type="text"
                        onChange={(e) => handleChangeInput(e)}
                        placeholder='Full name'
                    />
                    {errorName && <p className="errortext">{errorName}</p>}
                    <FormControl
                        className={`formcontrol ${errorEmail && 'is-invalid'}`}
                        name='email'
                        type="text"
                        onChange={(e) => handleChangeInput(e)}
                        placeholder='Email'
                    />
                    {errorEmail && <p className="errortext">{errorEmail}</p>}

                    <FormControl
                        className={`formcontrol ${errorPassword && 'is-invalid'}`}
                        name='password'
                        type="password"
                        onChange={(e) => handleChangeInput(e)}
                        placeholder='Password' />
                    {errorPassword && <p className="errortext">{errorPassword}</p>}

                    <FormControl
                        className={`formcontrol ${errorPhone && 'is-invalid'}`}
                        name='phone' type="number"
                        onChange={(e) => handleChangeInput(e)}
                        placeholder='Phone' />
                    {errorPhone && <p className="errortext">{errorPhone}</p>}

                    <FormControl
                        type="submit"
                        value="Submit"
                        style={{
                            color: 'white',
                            marginTop: '40px',
                            height: '60px',
                            backgroundColor: '#444444',
                            fontSize: '2rem'
                        }} />
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        Login?
                        <span
                            style={{ color: '#3366CC' }}
                            onClick={() => { pageNavigate('login') }}
                        >Click
                        </span>
                    </div>
                </Form>
            </div>
        </div >
    )
}
export default memo(Register);