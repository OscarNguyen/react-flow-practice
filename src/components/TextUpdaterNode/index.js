import React, { useCallback } from 'react'
import { Handle, Position } from 'react-flow-renderer'

const handleStyle = { left: 10 }

const TextUpdaterNode = (props) => {
    const onChange = useCallback((event) => {
        console.log(event.target.value)
    }, [])
    // console.log(props.value)
    return (
        <>
            <Handle id='t1' type='target' position={Position.Top} />
            <div>
                <label htmlFor='text'>Text:</label>
                <input id='text' name='text' onChange={onChange} />
            </div>
            <Handle type='source' position={Position.Bottom} id="a" />
            <Handle type='source' position={Position.Bottom} id="b" style={handleStyle} />
        </>
    )
}

export default TextUpdaterNode