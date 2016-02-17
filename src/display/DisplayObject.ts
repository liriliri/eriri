import Point from '../math/Point'
import Renderer from "../renderer/Renderer";

export default class DisplayObject
{
    position:Point;
    scale:Point;
    pivot:Point;
    rotation:number;
    visible:boolean;
    parent:any;
    constructor()
    {
        this.position = new Point();
        this.scale = new Point(1, 1);
        this.pivot = new Point(0, 0);
        this.rotation = 0;
        this.visible = true;
        this.parent = null;
    }
    get x():number
    {
        return this.position.x;
    }
    set x(val:number)
    {
        this.position.x = val;
    }
    get y():number
    {
        return this.position.y;
    }
    set y(val:number)
    {
        this.position.y = val;
    }
    render(renderer:Renderer)
    {
        // Overwrite
    }
    destroy()
    {
        this.position = null;
        this.scale = null;
        this.pivot = null;
        this.parent = null;
    }
}