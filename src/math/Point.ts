export default class Point
{
    x:number;
    y:number;
    constructor(x?:number, y?:number)
    {
        this.set(x, y);
    }
    set(x:number = 0, y?:number)
    {
        this.x = x;
        this.y = (y === void 0) ? this.x : y;
    }
}