module eriri 
{
    export class Renderer 
    {
        constructor(width:number, height:number, options:Object) 
        {
            options = options || {};
            
            this.filterManager = new FilterManager();
        }
        filterManager:FilterManager;
    }
}