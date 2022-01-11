import PropTypes from 'prop-types';

const checkCurrency = currencyCode => {
  switch (currencyCode) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€'
    case 'GBP':
      return '£';
    default:
      return currencyCode;
  }
}
const setRestClass = num => {
  if (num < 10) {
    return 'level-low'
  } else if (num > 20) {
    return 'level-high'
  } else {
    return 'level-medium'
  }
}

function ShopCard({ data }) {
  const image = data.MainImage ? data.MainImage.url_570xN : '';
  const currency = checkCurrency(data.currency_code);
  let title = "";

  if (data.title) {
    title = data.title.length > 50 ? data.title.substring(0, 50) + '...' : data.title;
  }

  return (
    <div className="item" id={data.id}>
      <div className="item-image" >
        <a href={data.url}>
          <img src={image} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currency}{data.price}</p>
        <p className={setRestClass(data.quantity) + " item-quantity"}>{data.quantity} left</p>
      </div>
    </div>
  )
}


ShopCard.propTypes = {
  data: PropTypes.object
};
export default ShopCard;