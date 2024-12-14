import './List.css';
import { Card } from './Card';

export const List = ({ products }) => {
    return (
        <ul className='card-list'>
            {products.map((item) => (
                <li className='card-list__item' key={item.id}>
                    <Card 
                        title={item.title}
                        price={item.price}
                        discount={item.discount}
                        imageUrl={item.imageUrl}
                    />
                </li>
            ))}
        </ul>
    );
};