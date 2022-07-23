import { ComponentProps, useEffect, useReducer } from 'react'
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

const checkNullObject = (data: object | null) => {

    if (typeof data === "object") {
        console.log("data is object", typeof data)
        return data
    }

}

console.log("null Checkable", checkNullObject(null))
console.log("checkArray", checkNullObject([1, 2, 3]))
console.log("checkObject", checkNullObject({ name: "test" }))

const unionType = (data: string | number) => {
    if (typeof data === "string") {
        return data.toUpperCase()
    } else {
        return data.toFixed(2)
    }
}

let x = (Math.random()) < 0.5 ? 10 : "hello world!"

const printX = (x: any) => {
    if (x instanceof Number) {
        return x.toFixed(2)
    }
    if (x instanceof String) {
        return x.toUpperCase()
    }
    return x
}


console.log("Prinx", printX(x))



console.log("test iN OPERATOR", "name" in { name: "test" })

const instanceOfExample = (data: any) => {
    if (data instanceof Array) {
        return data.map((item: any) => typeof item === "string" ? item.toUpperCase() : (item.toFixed(2) + " "))
    }
    return data.toUpperCase()
}





class Fish implements Fish {
    name: string
    age: number
    weight: number
    swim: () => void
    constructor(name: string, age: number, weight: number) {
        this.name = name
        this.age = age
        this.weight = weight
        this.swim = () => {
            return (this.name + " is swimming")
        }
    }

}

class Bird implements Bird {
    name: string
    age: number
    weight: number
    fly: () => void
    constructor(name: string, age: number, weight: number, fly: () => void) {
        this.name = name
        this.age = age
        this.weight = weight
        this.fly = () => {
            return (this.name + " is flying")
        }
    }
}

class Mammal implements Mammal {
    name: string
    age: number
    weight: number
    constructor(name: string, age: number, weight: number) {
        this.name = name
        this.age = age
        this.weight = weight
    }
}

interface Fish {
    name: string
    age: number
    weight: number
    swim: () => void
}

interface Bird {
    name: string
    age: number
    weight: number
    fly: () => void
}

interface Mammal {
    name: string
    age: number
    weight: number
}

const testPet = (pet: Fish | Bird | Mammal) => {
    if (pet instanceof Fish) {
        return pet.swim()
    } else if (pet instanceof Bird) {
        return pet.fly()
    }
    return pet.name.toUpperCase()
}



const pet1 = new Fish("Fish", 1, 1)
const pet2 = new Bird("Bird", 1, 1, () => {
    return "Bird is flying"
}
)
const pet3 = new Mammal("Mammal", 1, 1)
console.log("pet2", testPet(pet2))
console.log("pet3", testPet(pet3))
console.log("testPet", testPet(pet1))


const returnFromTestPet = (() => {
    return testPet(pet1)
}
)
console.log("returnFromTestPet", returnFromTestPet())


interface Shape {
    kind: "circle" | "rectangle"
    radius: number
    width: number
    height: number

}

const drawShape = (shape: Shape) => {
    switch (shape.kind) {
        case "circle":
            return "circle"
        case "rectangle":
            return "rectangle"
    }
}

const calculateArea = (shape: Shape) => {

    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius
        case "rectangle":
            return shape.width * shape.height
    }
}

const fakeFiveCharStringArray = (): string[] => {
    return ["dove", "capp", "trap", "rekt", "mech"]
}

const initialState = {
    wordList: fakeFiveCharStringArray(),
    currentWord: "",
    currentWordIndex: 0,
    currentGuess: "",
    currentGuessIndex: 0,


}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_WORD":
            const choseRandomWord = state.wordList[Math.floor(Math.random() * state.wordList.length)]
            return {
                ...state,
                currentWord: choseRandomWord,
            }
        case "SET_GUESS":
            return {
                ...state,
                currentGuess: action.payload,
            }
        case "CHECK_GUESS":
            if (state.currentWord[state.currentGuessIndex] === state.currentGuess) {
                return {
                    ...state,
                    currentGuessIndex: state.currentGuessIndex + 1,
                }
            }
            return state

        default: return state
    }

}



const tsFunctionType = (func: (a: number, b: string) => number) => {
    return func(1, "test")
}

const tsGreeter = (func: (a: string) => string) => {
    return func("test")
}

const tsGreeter2 = (func: (a: string) => void) => {
    func("test")
}


type CallSignature = {
    (a: number): number


}


const callSigExample = (func: CallSignature) => {
    return func(1)
}


type Hello = {
    new(a: string): HelloObj
}

const hello = (func: Hello) => {
    return new func("hello")
}


class HelloObj {
    constructor(public name: string) { }
    sayHello() {
        return `Hello ${this.name}`
    }
}

console.log("hello", hello(HelloObj))



const TsPractice: React.FC = ({ }: Props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

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
                Non Nullable Example: {nonNullableExample("test")}
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
            <div>
                Instance Of Example : {instanceOfExample([1, 2, 3])}
                <br />
                {/* Instance Of Example : {instanceOfExample("test")}  */}
            </div>
            <div>
                AssinmentTest : {printX(10)}
            </div>

            <div>
                <>
                    <h1>Fish</h1>
                    Test pet : {testPet(pet1)}
                    <h1>Bird</h1>
                    Bird : {testPet(pet2)}
                    <h1>Mammal</h1>
                    Mammal : {testPet(pet3)}

                </>



            </div>
            <div>
                <h1>Shape</h1>
                drawShape : {drawShape({ kind: "circle", radius: 1, width: 1, height: 1 })}
                <br />
                calculateArea : {calculateArea({ kind: "circle", radius: 1, width: 1, height: 1 })}
            </div>

            <div>
                <h1>Reducer</h1>
                <button onClick={() => dispatch({ type: "SET_WORD" })}>Set Word</button>
                <br />
                <button onClick={() => dispatch({ type: "SET_GUESS", payload: "test" })}>Set Guess</button>
                <br />
                <p>
                    current Word with 3rd character hidden : {state.currentGuess === state.currentWord ? state.currentWord : state.currentWord.substring(0, 3) + "..."}

                    <p>
                        box signiling if you guessed charcter right
                        {state.currentGuess.length > 0 ?
                            state.currentGuess.split("").map((item: string, index: number) => {
                                if (item === state.currentWord[index]) {
                                    return <span className="correct">{item}</span>
                                }
                                return <span className="incorrect">{item}</span>
                            }
                            ) : "no guess"}

                    </p>
                    {/* currentWord : {state.currentWord} */}
                </p>
                <p>
                    currentGuess : {state.currentGuess}
                </p>
                <input type="text" onChange={(e) => dispatch({ type: "SET_GUESS", payload: e.target.value })} />

                <p>
                    currentGuessIndex : {state.currentGuessIndex}
                </p>


            </div>
            <div>
                <h1>TsFunctionType</h1>
                <p>
                    tsFunctionType : {tsFunctionType((a: number, b: string) => a + b.length)}

                </p>
                <p> <>

                    tsGreeter : {tsGreeter((a: string) => a + " " + "greeting")}
                    <br />
                    tsGreeter2 : {tsGreeter2((a: string) => a + " " + "greeting")}
                </>
                </p>

            </div>
            <div>
                <h1>CallSignature</h1>
                <p>
                    callSigExample : {callSigExample((a: number) => a + 1)}
                </p>
                <p>
                    <>

                    </>





                </p>
            </div>





        </div>

    )
}

export default TsPractice
