import { useState } from "react";


function ProductCountModal({product, addProduct, setShowModal}) {
    const [ quantity, setQuantity ] = useState(1);

    function getQuantity() {
        const data = [];

        for(let i = 1; i <= 20; i++) {
            data.push(i)
        }
        return data;
    }

    return(
        <div className="fixed top-0 left-0 w-screen min-h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
            <div className="p-4 border rounded-md bg-white w-1/3">
                <div 
                    className="flex justify-end px-4 py-1 text-black font-bold cursor-pointer" 
                    onClick={() => setShowModal(false)}
                >
                    x
                </div>
                <div className="flex justify-center p-2">
                    <img src={product.image} height={80} width={80}/>
                </div>
                <div className="py-2 font-semibold">{product.title}</div>
                <div className="flex gap-4 py-2">
                    <div>Select Quantity - </div>
                    <select className="border-2 w-12" onChange={e => setQuantity(e.target.value)}>
                        {
                            getQuantity().map((quantity, ind) => <option key={ind} value={quantity}>{quantity}</option>)
                        }
                    </select>
                </div>
                <button 
                    className="bg-yellow-500 w-full py-1" 
                    onClick={() => addProduct(product.id, quantity)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCountModal;