import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import css from './ImageGallery.module.css'

const ImageGalery = ({ searchData })=> {

    return (
        <div>
            <ul className={css.gallery}>
                {searchData.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    id={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    // onImgClick={onImgItemClick}
                />))}
            </ul>
        </div>
    )
}

export default ImageGalery;