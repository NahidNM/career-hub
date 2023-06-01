import React from 'react';
// import React, { PureComponent } from 'react';

import { PieChart, Pie, Legend, Tooltip  } from "recharts";

const Statistics = () => {
    const data =[
        {
          name: 'Assignment 1',
            mark : 55
        },
        {
          name: 'Assignment 2',
            mark : 57
        },
        {
          name: 'Assignment 3',
            mark : 59
        },
        {
          name: 'Assignment 4',
            mark : 60
        },
        {
          name: 'Assignment 5',
            mark : 60
        },
        {
          name: 'Assignment 6',
            mark : 60
        },
        {
          name: 'Assignment 7',
            mark : 60
        },
        {
          name: 'Assignment 8',
            mark : 60
        }
    ]
     
    // console.log(data)
    return (
        <div className='my-10'>
            <h1 className='mt-8 text-2xl font-semibold text-center'>This is my Web Devloment 8 assignment mark Piechart</h1>
            
<div className='flex items-center justify-center m-4'>
<PieChart width={400} height={420} >
      <Pie
        dataKey="mark"
        // startAngle={360}
        // endAngle={0}
        isAnimationActive={true}
        data={data}
        cx="60%"
        cy="60%"
        outerRadius={120}
        innerRadius={40}
        fill="#413ea0"
        
        label
      />
      <Legend />
      <Tooltip />
      </PieChart>    
     </div>
     
    </div>
    );
};

export default Statistics;