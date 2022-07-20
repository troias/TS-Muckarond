import { useReducer, useState, useRef } from "react"
import Chicken from "../../models/chicken"


type ChickenFormProps = {
    chickenReducer: any
    dispatchReducer: any

}

type ChickenFormState = {
    id: string
    name: string
    age: number
    weight: number
}

const ChickenForm: React.FC<ChickenFormProps> = (props: any) => {

    console.log("ChickenForm", props)

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)


    const handleSubmit = (e: any) => {
        e.preventDefault()



        const id = Math.random().toString()

        const nameRef = nameInput.current.value || name
        const ageRef = ageInput.current.value || age
        const weightRef = weightInput.current.value || weight

        const chicken: ChickenFormState = new Chicken(id, nameRef, ageRef, weightRef)


        // console.log("id", id),
        console.log("chicken", chicken)




        // const chicken = new Chicken(id, name, age, weight)


        const sendToReducer = {
            type: 'ADD_CHICKEN',
            payload: chicken
        }



        // console.log("e.target.elements", chicken)

        props.dispatchReducer(sendToReducer)

    }

    const nameInput = useRef<any>(null) // useRef is a hook that lets you refer to DOM nodes so you can attach event listeners to them.
    const ageInput = useRef<any>(null)
    const weightInput = useRef<any>(null)

    const inputHandler = (e: any) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'age':
                setAge(e.target.value)
                break
            case 'weight':
                setWeight(e.target.value)
                break
            default:
                break
        }
    }



    return (
        <div className="chicken-form">
            <form >
                <label>
                    Name:
                    <input type="text" ref={nameInput} onChange={inputHandler} />
                </label>
                <label>
                    Age:
                    <input type="text" ref={ageInput} /// <reference path="" />
                        onChange={inputHandler} />
                </label>
                <label>
                    Weight:
                    <input type="text" ref={weightInput} onChange={inputHandler} />
                </label>
                <div className="button-wrapper">

                    <button type="submit" onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}



export default ChickenForm