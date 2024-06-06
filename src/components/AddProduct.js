import axios from "axios";
import { useEffect, useState } from "react";
import ProductCountModal from "./ProductCountModal";
import { Link } from "react-router-dom";


function AddProduct() {
    const [ userData, setUserData ] = useState({})
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});
    const [ showModal, setShowModal ] = useState(false);
    const [ product, setproduct ] = useState({});

    useEffect(() => { fetchProducts() }, [])

    useEffect(() => {
        const data = window.localStorage.getItem('cart')
        if(data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        const data = window.localStorage.getItem('userData')
        if(data) {
            setUserData(JSON.parse(data))
        }
    }, [])

    async function fetchProducts() {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products');
            console.log(data);
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    function updateUserData(e) {
        const { name, value } = e.target;
        const data = {...userData};
        data[name] = value;
        setUserData(data)
        window.localStorage.setItem('userData', JSON.stringify(data))
    }

    function addProduct(id, count) {
        const data = {...cart};
        data[id] = {product, count}
        setCart(data);
        window.localStorage.setItem('cart', JSON.stringify(data))
        setShowModal(false);
    }

    function selectProduct(index) {

        if(index === 'false') {
            return
        }
        setproduct(products[index]);
        setShowModal(true)
    }

    return(
        <div className="flex w-full justify-center">
            {
                showModal && <ProductCountModal product={product} addProduct={addProduct} setShowModal={setShowModal}/>
            }
            <div className="w-2/3 py-4">
                <div className="text-center text-3xl font-semibold">Create Order</div>
                <div>
                    <div className="flex flex-col gap-1 p-2">
                        <label>Name</label>
                        <div className="flex justify-between gap-8">
                            <input 
                                placeholder="First"  
                                type="text" 
                                className="border outline-none w-full p-2" 
                                name="first"
                                value={userData.first}
                                onChange={e => updateUserData(e)}
                            />
                            <input 
                                placeholder="Last" 
                                type="text" 
                                className="border outline-none w-full p-2"
                                name="last"
                                value={userData.last}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between p-2 gap-8">
                        <div className="flex flex-col gap-1 w-full">
                            <label>Email</label>
                            <input 
                                placeholder="Email" 
                                type="email"  
                                className="border outline-none w-full p-2"
                                name="email"
                                value={userData.email}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Mobile Number</label>
                            <input 
                                placeholder="Mobile Number" 
                                type="tel"  
                                className="border outline-none w-full p-2"
                                name="mobile"
                                value={userData.mobile}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between p-2 gap-8">
                        <div className="flex flex-col gap-1 w-full">
                            <label>Street Address</label>
                            <input 
                                placeholder="Street Address" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="street"
                                value={userData.street}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Suburb</label>
                            <input 
                                placeholder="Suburb" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="suburb"
                                value={userData.suburb}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between p-2 gap-8">
                        <div className="flex flex-col gap-1 w-full">
                            <label>City</label>
                            <input 
                                placeholder="City" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="city"
                                value={userData.city}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>State</label>
                            <input 
                                placeholder="State" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="state"
                                value={userData.state}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between p-2 gap-8">
                        <div className="flex flex-col gap-1 w-full">
                            <label>Postal Code</label>
                            <input 
                                placeholder="postal" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="postal"
                                value={userData.postal}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label>Country</label>
                            <input 
                                placeholder="Country" 
                                type="text"  
                                className="border outline-none w-full p-2"
                                name="country"
                                value={userData.country}
                                onChange={e => updateUserData(e)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 p-2">
                        <label>Select Product</label>
                        <select className="border outline-none p-2" onChange={e => selectProduct(e.target.value)}>
                            <option value={false}>---Select Product---</option>
                            {
                                products.map((product, ind) => 
                                <option key={ind} value={ind}>{product.title}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="p-2">
                    <div className="text-center font-semibold text-lg">Selected Products</div>
                    {
                        Object.keys(cart).map((item, ind) => 
                        <div key={ind} className="flex gap-2">
                            <div>{cart[item].product.title}</div>
                            <div className="font-semibold"> -- Quantity</div>
                            <div className="font-semibold">{cart[item].count}</div>
                        </div>
                    )
                    }
                </div>
                <div className="flex justify-center py-2">
                    <button className="bg-yellow-500 px-8 py-1" >
                        <Link to={'/checkout'}>Checkout</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;