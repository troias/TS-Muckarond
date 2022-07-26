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

interface Person {
    name: string
    age?: number
    weight?: number
    username?: string
}

type Circle = {
    radius: number
    color: string

}

const drawCircle = ({ circle: Circle }: { circle: Circle }) => {
    return `<circle cx="${Circle.radius}" cy="${Circle.radius}" r="${Circle.radius}" fill="${Circle.color}"/>`
}

const greet = (person: Person) => {
    return `Hello ${person.name} you fat ${person.weight}kg and ${(person.username !== undefined) ? `your username is ${person.username}` : ''}`
}

const greet1 = ({ name, age = 0, weight = 0, username = "John Doe" }: Person) => {
    return `Hello ${name} you fat ${weight}kg and ${(username !== undefined) ? `your username is ${username}` : ''}`
}

interface ReadOnly {
    readonly name: string
    readonly age: number
    readonly weight: number
    readonly username: string
}

const readOnly: ReadOnly = {
    name: 'John Doe',
    age: 30,
    weight: 70,
    username: 'jdoe'
}

type IndexSignature = {

    [index: number]: string | number
    length: number
    name: string


}

const getArr = (arr: IndexSignature) => {
    return arr[0]
}

const myArr = getArr({ length: 1, name: 'test' })

console.log(myArr)

interface BasicAmericanAddress {
    street: string
    city: string
    state: string
    zip: string
}

interface AmericanAddress extends BasicAmericanAddress {
    country: string
}


interface HawaiianAddress extends BasicAmericanAddress {
    country: string
    island: string
}

interface unitedState extends BasicAmericanAddress, AmericanAddress, HawaiianAddress {
    country: string
}

const exampleAddress: unitedState = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'California',
    zip: '12345',
    country: 'United States',
    island: 'Hawaii'
}

interface Name {
    first: string
    last: string
    weight: number
    username?: string

}

interface Address {
    street: string
    city: string
    state: string
    zip: string
}

type intersection = Name & Address


const draw = (person: intersection) => {
    return `Hello ${person.first} ${person.last} you fat ${person.weight}kg and ${(person.username !== undefined) ? `your username is ${person.username}` : ''}`
}

type Box<T> = {
    contents: T
}

const stringBox: Box<string> = {
    contents: 'test'
}

const numBox: Box<number> = {
    contents: 1
}

type BoxOfOranges = {
    contents: string
    isOpen: boolean

}


const boxOfOranges: Box<BoxOfOranges> = {
    contents: {
        contents: 'test',
        isOpen: true
    }
}

interface Car<T> {
    name: T
    year: number
    color: string
}

const toyota: Car<string> = {
    name: 'toyota',
    year: 2020,
    color: 'red'
}


type ReadonlyArray<T> = T[] & Readonly<T[]>


const readonlyArray: ReadonlyArray<number> = [1, 2, 3]

const addNumsFromArray = (arr: ReadonlyArray<number>) => {
    return arr.reduce((acc, curr) => {
        return acc + curr
    }
        , 0)
}

type TupleType = [string, number, boolean]

const exampleTuple: TupleType = ['test', 1, true]

const readTuple = (tuple: TupleType) => {
    return tuple.map((item) => {
        return item + " "
    }
        , 0)
}

const destructureTuple = ([first, second, ...third]: TupleType) => {
    return first + " " + second + " " + third
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
                    <h1> Object Types</h1>
                    <span>{greet({ name: 'troy', age: 30, weight: 73, username: "troias" })}</span>
                    <br />
                    draw circle <br />
                    <span>{drawCircle({ circle: { radius: 10, color: 'red' } })}</span>
                    <br />
                    read only <br />
                    <span>{readOnly.name}</span>
                    <br />
                    <span> {numBox.contents}</span>
                    <br />
                    <span> {stringBox.contents}</span>
                    <br />
                    <span>{addNumsFromArray(readonlyArray)}</span>

                    <br />
                    <span> {readTuple(exampleTuple)}</span>
                    <br />
                    <span> {destructureTuple(exampleTuple)}</span>










                </p>
            </div>

        </div>
    )
}

export default Tspractice2