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

const genericType = <T,>(arg: T[] | undefined) => {

    if (arg) {
        return arg[0]
    }

}
//genericType<string, number>(['test', 1])

const genericTypeExtension = <T extends {
    name: string
}>(arg: T) => {
    return arg
}

console.log("xtension", genericTypeExtension({ name: 'test' }))

interface Data {
    postalCodes: string[]
    country: string
}

type IOverload = {
    (postalCodes: string[]): Data
    (country: string): Data
}

const overload: IOverload = (arg: any): Data => {
    if (arg instanceof Array) {
        return {
            postalCodes: arg,
            country: 'test'
        }
    } else {
        return {
            postalCodes: [],
            country: arg
        }
    }
}

// let getDataByKey = (data: Data, key: 'postalCodes'): string[]
// let  getDataByKey = (data: Data, key: 'country'): string
// let  getDataByKey = (data: Data, key: 'postalCodes' | 'country') => {
//     return data[key]
// }

const unlimitedArgsFunction = (a: number, ...args: any[]) => {

    return a + args.reduce((acc, curr) => {
        return acc + curr
    }
        , 0)
}

type abc = {
    a: number
    b: number
    c: number
}

const deconstructed = ({ a, b, c }: abc) => {
    return a + b + c
}




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
                    <span>{genericType(["troias", "bob"])}</span>
                    <br />
                    <span>{genericTypeExtension({ name: 'test' }).name}</span>
                    <br />
                    <span>{overload(["troias", "bob"]).postalCodes.map(x => " " + x)}</span>
                    <br />
                    <span>{overload("test").country.split(/e/g)}</span>
                    <br />
                    <span>{unlimitedArgsFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}</span>
                    <br />
                    <span>{deconstructed({ a: 1, b: 2, c: 3 })}</span>







                </p>
            </div>

        </div>
    )
}

export default Tspractice2