import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    { id: '35', style: { width: 200, height: 200 }, type: 'group', data: { cc: 'ahihi' }, position: { x: 0, y: 0 } },
    { id: '3', parentNode: '35', extent: 'parent', data: { label: 'Node 3' }, position: { x: 10, y: 90 } },
    { id: '5', parentNode: '35', extent: 'parent', type: 'input', data: { label: 'Input 5' }, position: { x: 10, y: 10 } },
    { id: "1", targetPosition: 'top', sourcePosition: 'bottom', connectable: true, data: { label: <h1>Input 1</h1> }, position: { x: 250, y: 0 } },
    { id: "1", type: "input", connectable: true, data: { label: <h1>Input 1</h1> }, position: { x: 250, y: 0 } },
    { id: "2", type: 'output', data: { label: 'Node 2' }, position: { x: 150, y: 100 } },
    { id: "6", type: 'textUpdater', data: { value: 'Node 4' }, position: { x: 0, y: 0 } },
    { id: "4", type: 'colorPicker', data: {}, position: { x: 0, y: -100 } },
]

// const nodes = [
//     {
//         id: 'A',
//         type: 'group',
//         data: { label: null },
//         position: { x: 0, y: 0 },
//         style: {
//             width: 170,
//             height: 140,
//         },
//     },
//     {
//         id: 'B',
//         type: 'input',
//         data: { label: 'child node 1' },
//         position: { x: 10, y: 10 },
//         parentNode: 'A',
//         extent: 'parent',
//     },
//     {
//         id: 'C',
//         data: { label: 'child node 2' },
//         position: { x: 10, y: 90 },
//         parentNode: 'A',
//         extent: 'parent',
//     },
// ];

// export default nodes;