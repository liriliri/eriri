import Container from "../display/Container";

export default class Renderer
{
    width:number;
    height:number;
    view:HTMLCanvasElement;
    gl:WebGLRenderingContext;
    constructor(width:number = 800, height:number = 600, options:any = {})
    {
        this.width = width;
        this.height = height;
        this.view = options.view || document.createElement('canvas');
        this.gl = <WebGLRenderingContext>this.view.getContext('webgl');
    }
    render(scene:Container)
    {
        scene.render(this);
    }
}
