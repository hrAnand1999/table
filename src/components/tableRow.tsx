import powerbi from "powerbi-visuals-api";
import * as React from 'react';

import DataView = powerbi.DataView;

type props = {
    rows : any,
    cols : any
}

export class TableRow extends React.Component<props> {
    constructor(props : props){
        super(props);
        
    }
    
    render(){
        
        
        let columns = []
        for(let ele of this.props.cols)
        {
            columns.push(<th>{ele.displayName}</th>);
        }
        let rows = [];
        for(let ele of this.props.rows)
        {
            let arr = [];
            for(let data of ele) {
                arr.push(<td>{data}</td>);
            }
            rows.push(<tr>{arr}</tr>);
        }
        let table = (
            <div>
                <table>
                    <thead>
                        {columns}
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
        
        
       
        return(
           <div>
               {table}
           </div>
        )
        }

        
    
}


