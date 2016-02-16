import FilterManager from './manager/FilterManager.ts'

export default class Renderer
{
    filterManager:FilterManager;
    constructor(width:number, height:number, options:Object)
    {
        options = options || {};

        this.filterManager = new FilterManager();
    }
    render() {}
}
