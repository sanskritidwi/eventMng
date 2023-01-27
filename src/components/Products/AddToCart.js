import React, { useState } from "react";

export const AddToCart = ({limit}) => {

    

    const [productCount, setProductCount] = useState(0);
	const [press, setPress] = useState(false);
    const [stockError, setStockError] = useState(false)


    const handleIncrement = () => {
        console.log(productCount, limit)
        if(productCount<limit){
            setProductCount((p) => p + 1);

        }else{
            setStockError(true)
        }
    };
    const handleDecrement = () => {
        setProductCount((p) => p - 1);
    };
    const handleAddClick = () => {
        setPress(true);
        setProductCount(1);
    };

    const renderStockError=()=>{
        if(!stockError) return null;
        return(
            <> Max limit is {limit}</>
        )
    }

    if (productCount === 0) {
        return (
            <>
                <div
                    className="cartBtn"
                    onClick={() => {
                        handleAddClick();
                    }}>
                    Add To Cart
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="productCounter">
                    <div
                        className="cartBtn"
                        onClick={() => {
                            handleDecrement();
                        }}>
                        -
                    </div>

                    <div className="productCount">{productCount}</div>
                    <div
                        className="cartBtn"
                        onClick={() => {
                            handleIncrement(limit);
                        }}>
                        +
                    </div>
                </div>
                {renderStockError()}
            </>
        );
    }
}
