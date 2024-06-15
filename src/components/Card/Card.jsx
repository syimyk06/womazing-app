import './Card.scss'

export const Card = ({product}) => {
    const {title, thumbnailUrl} = product;
    return (
        <>
         <div className="card">
            <div className="card__img">
                <img src={thumbnailUrl}/>
            </div>
            <h4 className="card__title">Футболка USA</h4>
            <h3 className='card__price'>$99</h3>
         </div>
        </>
    )
}