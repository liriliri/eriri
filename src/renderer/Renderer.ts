import FilterManager from './manager/FilterManager.ts'

export default class Renderer
{
    constructor(width:number, height:number, options:Object)
    {
        options = options || {};

        this.filterManager = new FilterManager();
    }
    filterManager:FilterManager;
}
