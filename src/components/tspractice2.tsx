import React from 'react'
import classes from './tsPractice2.module.css'

type Props = {}

const quickFox = `a quick brown fox jumps fox over the lazy dog\n
secline`

const foundArr1 = quickFox.match(/[a-z]{3}/g)

const wordsWithAregex = /a/
const searchSecondLineCharRegx = /x/m  // /\n/m is a regex that matches the new line character

const foundArr = quickFox.match(searchSecondLineCharRegx)
console.log(foundArr1)

const notFoxRegx = /fox{1}/g

const returnStr = new RegExp(/lazy/)

const printReturnStr = (str: string, regex: RegExp) => {
    return str.match(regex)
}

const containDigitNumberUpperCaseLowerCaseMin8 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z)(?=.*[@#$%^&+=])(?=\S+$).{8,}$/ // min 8 characters, at least one number, one uppercase and one lowercase letter, and one special character

// const notFox = quickFox.match(regex)
console.log("testPass", containDigitNumberUpperCaseLowerCaseMin8.test("T7@testPass"))


const Tspractice2 = (props: Props) => {
    return (
        <div className={classes.container}>
            <h1>TS Practice 2</h1>

            <div className={classes.box}>
                <h2>Regex</h2>
                <p>
                    <span>{foundArr}</span>
                    basic regex
                    <br />
                    expressions
                    <br />
                    {/* <span>{notFox}</span> */}
                    <br />
                    <span>{printReturnStr(quickFox, returnStr)}</span>
                    <br />




                </p>
            </div>

        </div>
    )
}

export default Tspractice2