import PropTypes from 'prop-types';
import Star from "./Star";


function Stars({ count }) {
  const stars = Array(count).fill('');
  if (count > 0 && count <= 5) {
    return (
      <ul className="card-body-stars u-clearfix">
        {stars.map((val, key) =>
          <Star key={key} id={key} />)
        }
      </ul>
    )
  } else {
    return (<></>)
  }
}

Stars.defaultProps = {
  count: 0
};
Stars.propTypes = {
  count: PropTypes.number
};


export default Stars;