import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const OrderScreen = () => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('API_URL', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        customerId: 'CUSTOMER_ID',
                        productPriceId: 'PRODUCT_PRICE_ID',
                        quantity: 'QUANTITY',
                        orderId: 'ORDER_ID',
                    }),
                });

                const data = await response.json();
                setOrderData(data);
            } catch (error) {
                console.error('Error fetching order data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View>
            {orderData ? (
                <Text>{JSON.stringify(orderData)}</Text>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default OrderScreen;
