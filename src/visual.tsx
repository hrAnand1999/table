"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IViewPort = powerbi.IViewport;


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TableRow} from './components/tableRow';

import './../style/visual.less';

export class Visual implements IVisual {

    private target : HTMLElement;
    private reactRoot : React.ComponentElement<any, any>;
    private viewport : IViewPort;
    private updateCount : number;
    

    constructor(options : VisualConstructorOptions) {
       
        this.target = options.element;
        this.updateCount = 0;

    }

    public update(options : VisualUpdateOptions) {
        
        if(options.dataViews && options.dataViews[0]){
            
            ReactDOM.render(<TableRow rows = {options.dataViews[0].table.rows}
                    cols = {options.dataViews[0].table.columns}/>, this.target)
        }
        else{
            this.target.innerHTML = `<p>update count : <em>${this.updateCount}</em></p>`
        }
        
        
    
    }
}