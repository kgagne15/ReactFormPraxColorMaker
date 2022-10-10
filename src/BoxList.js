import { v4 as uuid } from 'uuid';
import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const deleteBox = (id) => {
        let boxCopy = [...boxes];
        boxCopy.splice(id, 1)
        setBoxes([...boxCopy])
    }

    const addBox = (newBox) => {
        newBox.width = parseInt(newBox.width)
        newBox.height = parseInt(newBox.height)
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    return (
        <>
            <div>
                {boxes.map(({id, color, width, height}) => <Box deleteBox={deleteBox} id={id} key={id} color={color} width={width} height={height} />)}
            </div>
            <NewBoxForm addBox={addBox} />
        </>
    )
}

export default BoxList;