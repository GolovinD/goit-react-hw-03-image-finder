import React from 'react'

import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button'

import css from './App.module.css'

class App extends React.Component {

  state = {
    searchQuery: '',     
    searchData: [],
    page: 1,
    largeImageURL: '',
    id: '',
    tags: '',
    showModal: false,
    error: null,
    totalImages: 0,
    status: 'idle',
};

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }
  
  handleFormSubmit = searchQuery => {
    // console.log(searchQuery);

    this.setState({
      searchQuery,
      searchData: [],
      page: 1,

    });
    // console.log(this.state);
  }

  loadMore = () => {
    console.log('click!')
    this.setState(prevState => ({
      page: prevState.page + 1,
      
    }))
    console.log(this.state.page)
  };

  onImgClick = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
    this.toggleModal();
    console.log('click photo');
    console.log(largeImageURL);
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page, searchData } = this.state;
    const prevSearch = prevState.searchQuery;
    const prevPage = prevState.page;
    const nextSearch = searchQuery;
    if (prevSearch !== nextSearch
           || page !== prevPage) {
      console.log('зміна пропів', nextSearch);
      this.setState({
        searchData: [],
        status: 'pending',
      });
        fetch(`https://pixabay.com/api/?q=${nextSearch}&page=${page}&key=31277829-041385667a49103701e539b4a&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
          
          // const totalPage = Math.ceil(totalHits / PER_PAGE);
          
          
        if (response.ok) {
          return response.json();
        }
          return Promise.reject(
            new Error(`Нажаль не знайдено зображень по запиту - ${nextSearch}`)
          )
      })
          
      .then(data => { 
        const { hits } = data
        console.log(data);
        this.setState({
          searchData: [...searchData, ...hits],
            status: 'resolved'
        })
      })
          
      .catch(error => this.setState({ error, status: 'rejected' }));       
    }
  }

  render() {
    const { status, error, searchData, largeImageURL, showModal } = this.state;
    

    return (
      <div className={css.app}>

        <Searchbar
          onSubmit={this.handleFormSubmit}
        />
        {status === 'pending' &&
          <Loader/>}
        
        {status === 'rejected' &&
          <h1>{error.message}</h1>}
        
        
          <ImageGallery
          searchData={this.state.searchData}
          onImgClick={this.onImgClick}
          />
        {searchData.length > 0 &&
          <Button
            onClick={this.loadMore}
          />}

       
        {showModal &&
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.toggleModal}
          />}        
            
      </div>
    );
  };
}

export default App;


