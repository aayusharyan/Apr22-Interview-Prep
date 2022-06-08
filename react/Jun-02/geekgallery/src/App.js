import Header from "./components/Header";
import ImageList from "./components/ImageList";
import Popup from "./components/Popup";
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import InfiniteScroll from 'react-infinite-scroller';

function App() {
  //All the states will be in App.JS
  // const [showModal, setShowModal] = useState(false);
  // const [modalData, setModalData] = useState({});
  const [imageList, setImageList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (searchKey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
        .then(response => setImageList(response.data.results));
    }
  }, [searchKey])

  // const closeModal = () => setShowModal(false);
  // const openModal = id => {
  //   const selected_image = imageList.find(single_elem => single_elem.id == id);
  //   setModalData(selected_image);
  //   setShowModal(true); 
  // }

  // useEffect(() => {
  //   axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
  //     .then(response => setImageList(response.data));
  // }, []);

  const loadFunc = (e) => {
    console.log(e);
    axios.get(`https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(old => [...old, ...response.data]));
  }

  return (
    <>
      <Header setSearchKey={setSearchKey} />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <Routes>
          <Route path="/" element={<ImageList images={imageList} />} />
          <Route path="/image/:id" element={<Detail />} />
        </Routes>
      </InfiniteScroll>
      {/* <Popup showModal={showModal} closeModal={closeModal} modalData={modalData} /> */}
      <Footer />
    </>
  );
}

export default App;
