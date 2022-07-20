
type Props = {}

const ChickenList = (props: Props) => {

    return (
        <div className="chicken-list">
            <ul>
                {/* {props.chickens.map((chicken: any) => {
                    return (
                        <li key={chicken.id}>
                            <span>{chicken.name}</span>
                            <span>{chicken.age}</span>
                            <span>{chicken.weight}</span>
                        </li>
                    )
                }
                )} */}
            </ul>
        </div>
    )
}

export default ChickenList