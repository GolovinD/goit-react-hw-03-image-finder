import React from 'react'

import Searchbar from './Searchbar/Searchbar'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'

class App extends React.Component {

  state = {
    imgs: '',
    searchQuery: '',
    showModal: false,
    loading: false,
  }


  // state = {
  //   searchData: '',
  //   images: [],
  //   page: 0,
  //   largeImage: '',
  //   showModal: false,
  //   isLoading: false,
  //   error: null,
  //   totalImages: 0,
  //   isMoreBtnHide: false,
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  async componentDidMount() {
    this.setState({ loading: true });

    fetch('https://pixabay.com/api/?q=cat&page=1&key=31277829-041385667a49103701e539b4a&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(console.log)
      .then(imgs => this.setState({ imgs }))
      .finally(() => this.setState({ loading: false }))
  }
  
  handleFormSubmit = searchQuery => {
    console.log(searchQuery);

    this.setState({
      searchQuery,
      searchResult: [],
      totalHits: null,
      page: 1,
      totalPage: null,
    });
    console.log(this.state);
  }

  render() {
    const { showModal } = this.state;


    return (
      <div>

        <Searchbar
        onSubmit={this.handleFormSubmit}
        ></Searchbar>


        {showModal &&
          <Modal
          onClose={this.toggleModal}
          />}
      
      </div>
    );
  };
}

export default App;


