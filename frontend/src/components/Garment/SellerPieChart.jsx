import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'XS', value: 10 },
	{ name: 'S', value: 12 },
	{ name: 'M', value: 120 },
    { name: 'L', value: 160 },
    { name: 'XL', value: 28 },
    { name: 'XXL', value: 12 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#42aaff', '#4281ff', '#5542ff','#581085','#590a53','#30042d']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function SellerProfilePieChart() {
	return (
		<div className="w-[19rem] h-[22rem] bg-white p-4 rounded-lg border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Selling Rates of Each Size</strong>
			<div className=" w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}