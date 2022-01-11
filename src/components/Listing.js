import ShopCard from "./ShopCard";
import PropTypes from 'prop-types';

function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((data) => <ShopCard data={data} key={data.listing_id} />)}
    </div>

  )
}
Listing.propTypes = {
  data: PropTypes.array
};

export default Listing;