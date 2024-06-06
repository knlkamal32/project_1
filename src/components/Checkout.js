import { useEffect, useState } from "react";


function Checkout() {
    const [ cart, setCart ] = useState({});
    const [ userData, setUserData ] = useState({});
    const [ itemsCount, setItemsCount ] = useState();
    const [ totalCost, setTotalCost ] = useState();

    useEffect(() => {
        const data = window.localStorage.getItem('cart')
        if(data) {
            const parsedData = JSON.parse(data)
            var items = 0;
            var total = 0;
            Object.keys(parsedData).forEach(id => {
                items += +parsedData[id].count
                total += +parsedData[id].count * +parsedData[id].product.price
            })
            setItemsCount(items);
            setTotalCost(total);
            setCart(parsedData)
        }
    }, [])

    useEffect(() => {
        const data = window.localStorage.getItem('userData')
        if(data) {
            setUserData(JSON.parse(data))
        }
    }, [])

    return(
        <div className="flex w-full justify-center">
            <div className="w-2/3 py-4">
                <div className="text-center text-3xl font-semibold">Checkout</div>
                <div className="py-2">
                    <div className="font-semibold text-lg py-1">{`${userData.first} ${userData.last}`}</div>
                    <div className="py-1">{`Email - ${userData.email}`}</div>
                    <div className="py-1">{`Mobile No. - ${userData.mobile}`}</div>
                    <div className="py-1">
                        {`Address - ${userData.street}, ${userData.suburb}, ${userData.city}, ${userData.state}, ${userData.postal} - ${userData.country}`}
                    </div>
                </div>
                <div>
                    {
                        Object.keys(cart).map((item, ind) => 
                            <div key={ind} className="flex gap-8 px-2 py-4 border">
                                <div className="flex items-center">
                                    <img src={cart[item].product.image} height={100} width={100} />
                                </div>
                                <div className="py-4">
                                    <div className="font-semibold text-lg">{cart[item].product.title}</div>
                                    <div className="font-semibold text-md">{cart[item].product.category}</div>
                                    <div>Price - {cart[item].product.price}</div>
                                    <div>Quantity - {cart[item].count}</div>
                                    <div>Total - {+cart[item].product.price * cart[item].count}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="px-4 py-2 flex justify-end">
                    <div className="text-lg">{`Subtotal (${itemsCount} Items) - `}<span className="font-bold">{totalCost}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;