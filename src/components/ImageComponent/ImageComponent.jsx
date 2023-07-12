
import PropTypes from "prop-types";
const ImageComponent = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};
ImageComponent.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ImageComponent;
