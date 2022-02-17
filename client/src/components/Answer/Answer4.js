import { Checkbox, Input } from "semantic-ui-react"

const Answer4 = (props) => {
    const onChangeHandler = (e) => {
        const {name, value} = e.target
        props.setData(prevState => ({...prevState, [name]:value}))
    }
    return(
        <div>
            <Checkbox
            onChange={onChangeHandler}
            />
            <Input
            placeholder = "new answer"
            onChange={onChangeHandler}
            />                      
        </div>
    )
}

export default Answer4