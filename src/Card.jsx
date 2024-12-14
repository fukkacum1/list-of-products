import './Card.css'

export const Card = ({ title, price, discount, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="card-image" className='card__img'/>
            <p className='card__title'>{title}</p>
            {discount ? (
                <div className='card__price'>  
                    <span className='card__new-price'>{price * (1 - discount)} ₽</span>
                    <span className='card__old-price'>{price} ₽</span>
                </div>
            ) : (
                <span className='card__price-nod'>{price} ₽</span>
            )}
            <button className='card__button'>ЗАКАЗАТЬ</button>
        </div>
    );
};