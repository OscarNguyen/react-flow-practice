import React, { memo, useEffect, useState } from 'react'
import { Handle, Position } from 'react-flow-renderer'

import './index.scss'

const ColorPickerNode = memo(({ data, isConnectable, ...props }) => (
    <div className='color-picker-node '>
        <Handle
            type='target'
            position={Position.Left}
            onConnect={(params) => console.log("connect handle", params)}
            isConnectable={isConnectable} />

        <div>
            <p>Custom Color Picker Node: <b>{data.bgColor}</b></p>
            <input
                type="color"
                value={data.bgColor}
                onChange={data.onChangeBgColor} />
        </div>

        <Handle
            type='source'
            position={Position.Bottom}
            id="handle-source-a"
            isConnectable={isConnectable} />

        <Handle
            type='source'
            position={Position.Right}
            id="handle-source-b"
            isConnectable={isConnectable} />
    </div>
))


export default ColorPickerNode