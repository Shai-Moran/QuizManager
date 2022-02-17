import { Checkbox, Input } from "semantic-ui-react"

const Answer = (props) => {
    const onChangeHandlerCheckBox = (e) => {
        props.setData({content: props.data.content, isTrue: e.target.value}) 
    }

    const onChangeHandlerInput = (e) => {
        props.setData({content: e.target.value, isTrue: props.data.isTrue})
    }
    return(
        <div>
            <Checkbox
            onChange={onChangeHandlerCheckBox}
            />
            <Input
            placeholder = "new answer"
            onChange={onChangeHandlerInput}
            />                      
        </div>
    )
}

export default Answer