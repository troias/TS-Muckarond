class Chicken {
    id: string
    name: string
    age: number
    weight: number
    getWeight(): number {
        return this.weight
    }

    constructor(id: string, name: string, age: number, weight: number) {
        this.id = id
        this.name = name
        this.age = age
        this.weight = weight
    }

}

export default Chicken

