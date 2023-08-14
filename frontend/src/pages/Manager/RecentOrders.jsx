import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../../lib/helpers/index.jsx'

const recentOrderData = [
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'PLACED',
		shipment_address: 'Mirigama, Gampaha'
	},
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Mirigama, Gampaha'
	},
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'Mirigama, Gampaha'
	},
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'Mirigama, Gampaha'
	},
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'Mirigama, Gampaha'
	},
	{
		id: '001',
		product_id: '123',
		customer_id: '12345',
		customer_name: 'Malinga Heshan',
		order_date: '2023-05-17T03:24:00',
		order_total: '$30.50',
		current_order_status: 'DELIVERED',
		shipment_address: 'Mirigama, Gampaha'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product ID</th>
							<th>Customer Name</th>
							<th>Order Date</th>
							<th>Order Total</th>
							<th>Shipping Address</th>
							<th>Order Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}