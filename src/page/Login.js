import React, { memo, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveToLocalStorage } from "../data/localstorage";
function Login() {
    const navigation = useNavigate()
    const pageNavigate = (item) => {
        navigation('/' + item)
    }
    const user = useSelector((state) => state.user)
    console.log('user', user)
    saveToLocalStorage('user', user);
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    console.log('pass', errorPassword)
    console.log('email', errorEmail)
    function check(item) {
        console.log('item', item)
        if (!item.email) { setErrorEmail('vui lòng nhập thông tin') }
        if (!item.password) { setErrorPassword('vui lòng nhập thông tin'); return }


        const indexitem = user.length >= 1 && user.find((e) => e.email === item.email)
        console.log('indexitem', indexitem)

        const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.test(item.email)) {
            setErrorEmail('Email chưa đúng định dạng'); return
        }
        else if (!indexitem) {
            setErrorEmail('Email chưa được đăng kí.'); return
        }
        else if (item.password.length < 8) {
            setErrorPassword('password phải có từ 8 kí tự trở lên.'); return
        }
        else if (indexitem && indexitem.password !== item.password) {
            setErrorPassword('Password chưa đúng.'); return
        }
        else if (
            !errorEmail
            && !errorPassword
            && item.email
            && item.password
        ) {
            saveToLocalStorage('userCurrent', indexitem)
            console.log('loginsussect')
            console.log(indexitem)
            pageNavigate('')
        }
    }
    function handleSubmit(e) {
        const valueFrom = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        console.log(valueFrom)
        check(valueFrom)
        e.preventDefault();
    }
    function handleChangeInput(e) {
        const name = e.target.name
        const value = e.target.value
        switch (name) {
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
            default:
                console.log('loi case', name)
        }
    }
    return (
        <div className="constainer-fluid"
            style={{
                backgroundImage: 'url(../image/banner1.jpg)',
                padding: '45px 0px 45px 0px',
                backgroundSize: 'cover',

            }
            }>
            <div style={{
                width: '40%',
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
                        fontWeight: '150',
                        fontSize: '3.5rem',

                    }}>Sign Up</h2>

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
                        type="submit"
                        style={{
                            color: 'white',
                            marginTop: '40px',
                            height: '60px',
                            backgroundColor: '#444444',
                            fontSize: '2rem',

                        }} />
                    <div style={{ textAlign: 'center', marginTop: '40px' }}>Create account?<span style={{ color: '#3366CC' }} onClick={() => pageNavigate('register')}>Click</span></div>
                </Form>
            </div>
        </div >
    )
}
export default memo(Login);
