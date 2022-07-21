import { useEffect } from 'react'
import classes from './tsPractice.module.css'

type Props = {}


interface IChicken {
    id: string
    name: string
    age: number
    weight: number

}

const chicken: IChicken = {
    id: "1",
    name: "Chicken 1",
    age: 1,
    weight: 1,

}


const testFunction = (data: any) => {


    const { name } = data
    console.log("testFunction")
    const toLowerCase = (name: string) => {
        return name.toUpperCase()
    }
    return toLowerCase(name)

}

type ObjectShape = {
    name: string
    age: number
}

const listOfObjects: object[] = [
    {
        name: "Obj1",
        age: 1
    },
] as ObjectShape[]


const unionTypeExample = (data: string | number) => {
    if (typeof data === "string") {
        return data.toUpperCase()
    } else {
        return data.toFixed(2)
    }
}

const unionTypeArrayExample = (data: string | number | string[]) => {
    if (typeof data === "string") {
        return data.toUpperCase()
    } else if (Array.isArray(data)) {
        return data.map((item: string) => " " + item.toUpperCase())
    }
    return data.toFixed(2)
}


const testData: TestData = {

    name: "test",
    age: 1,
    weight: 1

}

type TestData = {
    name: string
    age: number
    weight: number
}


const literalExample = (s: string, alignment: "left" | "center" | "right") => {
    switch (alignment) {
        case "left":
            return s.toUpperCase()
        case "center":
            return s.toLowerCase()
        case "right":
            return s.toUpperCase()
    }
}

console.log("literal-Example", literalExample("test", "left"))



export default function TsPractice({ }: Props) {

    useEffect(function () {
        console.log("useEffect")



    }, [])

    return (
        <div className={classes.container}>
            <h1>TsPractice</h1>
            <p>
                display nameIn lowerCase : {testFunction(testData)}

            </p>
            <p>
                display listOfObjects : {listOfObjects.map((item: { name?: string; age?: number }) => item.name + " " + "age" + " " + item.age)}
            </p>
            <p>
                display unionTypeExample : string = {unionTypeExample("test")} Integer = {unionTypeExample(1)}
            </p>
            <p>
                display unionTypeArrayExample : string = {unionTypeArrayExample("test")} Integer = {unionTypeArrayExample(1)} Array = {unionTypeArrayExample(["test", "test2"])}
            </p>
            <p>
                display chicken : {chicken.name}
            </p>
            <div className="test" >
                Literal Example : {literalExample("test", "left")}


            </div>


        </div>

    )
}
