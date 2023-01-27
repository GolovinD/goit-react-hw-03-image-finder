import React from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css'

class Searchbar extends React.Component {

   state = {
       searchQuery: '',
    }
    
    handleChange = event => {
        const value = event.currentTarget.value;
    // console.log(value);
    this.setState({ searchQuery: value });
    }
    

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        const searchQueryNorm = this.state.searchQuery.toLowerCase();
        console.log(searchQueryNorm);
        if (searchQueryNorm.trim() === '') {
            alert('Зробіть запит');
            return;  
        }
        this.props.onSubmit(searchQueryNorm)
        this.setState({ searchQuery: '' });
    }

   
    render() {
    
        return (
            <div>
               <header className={css.searchbar}>
                    <form
                    className={css.form}
                      onSubmit={this.handleSubmit}>
                        

                  
                      <input
                        className={css.input}
                        type="text"
                        value={this.state.searchQuery}  
                        onChange={this.handleChange}    
                        autocomplete="off"
                        placeholder="Search images and photos"
                        autofocus
                      />
                    </form>
                </header>
            </div>
        )
    

    }

}

export default Searchbar;

Searchbar.protoTypes = {
    onSubmit: PropTypes.func.isRequired,
}