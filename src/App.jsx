import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [open, setopen] = useState(true)
    const [openPlusBtn, setopenPlusBtn] = useState(true)
    const [openMinusBtn, setopenMinusBtn] = useState(false)
    const [bgColor, setbgColor] = useState(false)
    const fun1 = function () {
        setopenPlusBtn(true)
        setopenMinusBtn(false)
        if (count == 0) {
            setopen(false);
        }
        if (count == 9) {
            setopen(true);
            setbgColor(true)
        }
        if (count < 10) {
            return (
                setCount(count + 1)
            )
        }
        if (count == 10) {
            setopen(false);
        }
        if (count == 90) {
            setopen(true);
            setbgColor(false)
        }
        if (count < 100) {
            return (
                setCount(count + 10)
            )
        }
        if (count == 100) {
            setopen(false);
        }
        if (count == 900) {
            setopen(true);
            setbgColor(true)
            setopenMinusBtn(true)
            setopenPlusBtn(false)
        }
        if (count < 1000) {
            return (
                setCount(count + 100)
            )
        }
    }
    const fun2 = function () {
        setopenPlusBtn(false)
        setopenMinusBtn(true)
        if (count == 1) {
            setbgColor(false)
            setopenMinusBtn(false)
            setopenPlusBtn(true)
            setopen(true);
        }
        if (count == 1000) {
            setopen(false);
        }
        if (count == 200) {
            setopen(true);
            setbgColor(false)
        }
        if (count <= 1000 && count > 100) {
            return (
                setCount(count - 100)
            )
        }
        if (count == 100) {
            setopen(false);
        }
        if (count == 20) {
            setopen(true);
            setbgColor(true)
        }
        if (count <= 100 && count > 10) {
            return (
                setCount(count - 10)
            )
        }
        if (count == 10) {
            setopen(false);
        }
        if (count <= 10 && count > 0) {
            return (
                setCount(count - 1)
            )
        }
    }

    return (
        <>
            <div className={bgColor ? 'bg1' : 'bg2'}>
                <div className="sec1">
                    <p className='sec1-p'>count is {count}</p>
                </div>
                <div>
                    <button className={openPlusBtn ? 'plusBtn' : 'desplusBtn'} onClick={fun1}>
                        Plus +
                    </button>
                    <button className={openMinusBtn ? 'minusBtn' : 'desminusBtn'} onClick={fun2}>
                        Minus -
                    </button>
                </div>
                <div className={open ? 'Active' : 'desActive'}>
                    <div className='sec2'>
                        <h3>NOW  {count}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
