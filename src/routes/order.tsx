import OrderForm from '@/components/order-form'
import { FunctionComponent } from 'react'

const Order: FunctionComponent = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
                Order Your Coffee
            </h2>
            <p className="text-gray-500">
                Fill out the form below to order your coffee
            </p>
            <div className="max-w-md">
                <OrderForm
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                />
            </div>
        </div>
    )
}

export default Order
