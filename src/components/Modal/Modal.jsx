import { Component } from "react";
import { createPortal } from "react-dom"
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }


   handleKeyDown = event => {
            if (event.code === 'Escape') {
                this.props.onClose();
            }
    }
    
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImageURL, tags } = this.props;
        console.log(largeImageURL);

        return createPortal (
            <div
            className={css.Overlay}
            onClick={this.handleBackdropClick}
            >
                <div className={css.Modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot,
        )
    }
}


export default Modal;