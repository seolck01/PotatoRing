import React from 'react'

interface IProps {
	chartData:any[]
	width: number
}
export default class extends React.Component<IProps,any>{
	get points(){
		const {chartData,width}=this.props
		const XRange = 10
		const YRange = chartData.reduce((a,b)=>a>b.length?a:b.length,0)
		return chartData.map((item,index)=>{
			const x = (index+3)/XRange *(width)-8
			let y = (1-item.length/YRange) * 60
			if(y===60){
				y = 59
			}
			return [x,y]
		})

	}
	public render(){
		console.log(this.props.chartData)
		console.log(this.points)
		return(
			<div className='bar_chart'>
				<svg width='100%' height={60}>
					<text>123</text>
					{this.points.map((point,index)=>(
						<rect key={index} fill="rgba(215,78,78,0.5)" x={point[0]} y={point[1]} width={16} height={60-point[1]}/>
					))}
				</svg>
			</div>
		)
	}
}