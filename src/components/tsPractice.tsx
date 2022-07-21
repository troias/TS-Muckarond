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

const literalIntegerExample = (s: string, alignment: 1 | 2 | 3) => {
    switch (alignment) {
        case 1:
            return s.toUpperCase()
        case 2:
            return s.toLowerCase()
        case 3:
            return s.toUpperCase()
    }
}

interface Options {
    width: number
}

const measurePenisWidth = (options: Options | "auto") => {


    if (typeof options === "string") {
        return options
    } else {
        return options.width * options.width * options.width
    }

}

const nonNullableExample = (data: string | null) => {
    if (null) {
        const defaultValue = "default"
        return data!.toUpperCase() || defaultValue //! is used to force the null check to fail


    }
    if (data) {
        // data is not null
        return data!.toLowerCase()
    }


}



const padLeftArw = (padding: number | string, input: string): string => {
    if (typeof padding === "number") {
        return "   ".repeat(padding) + input
    } else {
        return padding + input
    }
}





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
                Literal Integer Example : {literalIntegerExample("test", 1)}
            </div>

            <div>
                Measure Pen is : {measurePenisWidth("auto")}
                <br />
                Measure Pen is : {measurePenisWidth({ width: 2 })}
            </div>
            <div>
                Non Nullable Example : {nonNullableExample(null)}
                <br />
                Non Nullable Example : {nonNullableExample("test")}
            </div>
            <div>
                {/* Pad Left : {padLeft("test", "test")}
                <br />
                Pad Left : {padLeft(2, "test")} */}
                <br />
                Pad Left : {padLeftArw("test", "test")}
                <br />
                Pad Left : {padLeftArw(2, "test")}
                <br />
                number : {padLeftArw(2, "example")}
            </div>


        </div>

    )
}
