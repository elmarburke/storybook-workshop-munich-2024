import { FunctionComponent } from 'react'

import orderConfirmationIllustration from '@/assets/undraw_order_confirmed_re_g0if.svg'

const OrderConfirmation: FunctionComponent = () => {
    return (
        <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
                Your order has been confirmed
            </h2>

            <div className="flex justify-center">
                <img
                    src={orderConfirmationIllustration}
                    alt="Order confirmed"
                    className="size-96"
                />
            </div>
        </div>
    )
}

export default OrderConfirmation
