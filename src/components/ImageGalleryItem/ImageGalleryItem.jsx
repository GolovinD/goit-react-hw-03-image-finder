import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImage, tags, onImgClick}) => {
    return (
        <li
            className={css.galleryItem}
            key={id}>
            <img
                className={css.galleryImg}
                src={webformatURL}
                alt={tags}
                onClick={() => { onImgClick(id, largeImage) }}
            />
       </li>
    )
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};


export default ImageGalleryItem;