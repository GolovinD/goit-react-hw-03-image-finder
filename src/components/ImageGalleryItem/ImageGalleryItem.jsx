import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImageURL}) => {
    return (
        <li
            className={css.galleryItem}
            key={id}>
            <img
                className={css.galleryImg}
                src={webformatURL}
                alt={id}
                // onClick={() => { onImgClick(largeImageURL, id) }}
            />
       </li>
    )
}

export default ImageGalleryItem;