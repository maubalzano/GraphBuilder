export interface Data{
    name: string,
    y: number,
    sliced?: boolean
}
export type chartType = 'bar' | 'pie';
export interface Setting {
    
        chart: {
          type: chartType,
          height: number
        },
        title: {
          text: string
        },
        xAxis: {
          type: 'number',
          
        },
        series: [
          {
            name: string,
            colorByPoint: boolean,
            data: Data[]
          }
        ]
      }
