export interface Data {
    name: string, 
    y: number, 
    sliced?: boolean,
    color?: string,
    dragDrop: {
        draggableX: true,
        draggableY: true,
        liveRedraw: true
      },
    pointWidth?: number
    
}
export interface Series {
    name: string, 
    colorByPoint: boolean,
    data: Data[],
    startAngle: number,
    endAngle: number
    
}
export interface Options3d{
    enabled: boolean, 
    alpha: number, 
    beta: number, 
    depth: number, 
    viewDistance: number}