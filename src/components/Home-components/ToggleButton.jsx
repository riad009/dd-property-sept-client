import React, { useState } from 'react';
import { Button } from 'antd';

const ToggleButton = ({ isBuy, setIsBuy }) => {
    return (
        <div className="flex w-fit mx-auto gap-5 text-xl mb-5">
            <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1 w-40 h-10">
                <Button
                    type="text"
                    onClick={() => setIsBuy(true)}
                    className={`flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 cursor-pointer  font-semibold text-base ${isBuy ? 'bg-red-600 text-white' : 'text-black hover:bg-gray-300'
                        }`}
                >
                    Buy
                </Button>
                <Button
                    type="text"
                    onClick={() => setIsBuy(false)}
                    className={`flex items-center justify-center w-1/2 h-full rounded-full transition-colors duration-300 cursor-pointer font-semibold text-base ${isBuy ? 'text-black hover:bg-gray-300' : 'bg-red-600 text-white'
                        }`}
                >
                    Rent
                </Button>
                <div
                    className={`absolute top-1 left-1 w-1/2 h-8 rounded-full bg-transparent shadow-md transform transition-transform ${isBuy ? 'translate-x-0' : 'translate-x-full'
                        }`}
                ></div>
            </div>
        </div>
    );
};


export default ToggleButton;
