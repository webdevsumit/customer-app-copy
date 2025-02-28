import React, { useState } from 'react';
import './style.css';

import { scaleLinear, scaleBand } from 'd3-scale';

import Line from './line/line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import XYAxis from './axis/xy-axis';

let initData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 10 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 20 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 30 },
    { name: 'July', value: 0 },
    { name: 'Aug', value: 20 },
    { name: 'Sep', value: 100 },
    { name: 'Oct', value: 55 },
    { name: 'Nov', value: 60 },
    { name: 'Dec', value: 80 },
]

function NormalLineChart({ formatedData=null }) {

    const [data,] = useState(!!formatedData?formatedData:initData);

    // const randomData = (e) => {
    //     e.preventDefault();
    //     setData((prevState) => {
    //         const data = prevState.map(d => ({
    //             name: d.name,
    //             value: Math.floor((Math.random() * 100) + 1)
    //         }))
    //         return data;
    //     })
    // }

    const parentWidth = window.innerWidth<700? window.innerWidth : 700 ;


    const margins = {
        top: 20,
        right: 25,
        bottom: 20,
        left: 40,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
        .domain(data.map(d => d.name))
        .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
        .domain(extent(data, d => d.value))
        .range([height, 0])
        .nice();

    const lineGenerator = line()
        .x(d => xScale(d.name))
        .y(d => yScale(d.value))
        .curve(curveMonotoneX);

    return (
        <div className='NormalLineChart'>
            {/* <button onClick={randomData}>Randomize data</button> */}
            <svg
                className="lineChartSvg"
                width={width + margins.left + margins.right}
                height={height + margins.top + margins.bottom}
            >
                <g transform={`translate(${margins.left}, ${margins.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                </g>
            </svg>
        </div>
    )
}

export default NormalLineChart