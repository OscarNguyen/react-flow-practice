import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState } from 'react-flow-renderer'

import './flow.scss'
import initialNodes from '../../assets/data/nodes'
import initialEdges from '../../assets/data/edges'
import TextUpdaterNode from '../TextUpdaterNode'
import ColorPickerNode from '../ColorPickerNode'

const nodeTypes = {
    textUpdater: TextUpdaterNode,
    colorPicker: ColorPickerNode
}

const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const [bgColor, setBgColor] = useState("#333333")
    // const onNodesChange = (changes) => setNodes(prevNodes => applyNodeChanges(changes, prevNodes))
    // const onEdgesChange = (changes) => setNodes(prevEdges => applyEdgeChanges(changes, prevEdges))
    const onConnect = useCallback(
        (connection) => setEdges((prevEdges) => addEdge({ ...connection }, prevEdges))
        , [setEdges])

    const styles = {
        background: bgColor
    }


    const onChangeBgColor = event => {
        setNodes(prevNodes => {
            return prevNodes.map(node => {
                if (node.id === '4') {
                    // node.data.onChangeBgColor = onChangeBgColor
                    // node.data.bgColor = bgColor
                    setBgColor(event.target.value)
                    return { ...node, data: { ...node.data, bgColor } }
                } else {
                    return node
                }
            })
        })
    }

    useEffect(() => {
        setNodes(prevNodes => {
            return prevNodes.map(node => {
                if (node.id === '4') {
                    node.data.onChangeBgColor = onChangeBgColor
                    node.data.bgColor = bgColor
                }

                return node
            })
        })
    }, [bgColor])



    return (
        <div className='flow'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                style={styles}
                nodeTypes={nodeTypes}
                fitView
                attributionPosition="bottom-left"
            >
                <MiniMap />
                <Background />
                <Controls />
            </ReactFlow >
        </div>
    )
}

export default Flow