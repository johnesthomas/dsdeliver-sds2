import './styles.css'
import StepHeader from './StepsHeader'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {

    const [products, setProduct] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts().
            then(response => setProduct(response.data)).
            catch(error => console.log(error))
    }, [])

    return (
        <div className="orders-container">
            <StepHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders