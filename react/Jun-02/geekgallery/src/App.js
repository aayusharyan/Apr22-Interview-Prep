import Header from "./components/Header";
import ImageList from "./components/ImageList";
import Popup from "./components/Popup";
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //All the states will be in App.JS
  const [showModal, setShowModal] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [modalData, setModalData] = useState({});
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if(searchKey !== "") {
      axios.get(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageList(response.data.results));
    }
  }, [searchKey])

  const closeModal = () => setShowModal(false);
  const openModal = id => {
    const selected_image = imageList.find(single_elem => single_elem.id == id);
    setModalData(selected_image);
    setShowModal(true); 
  }

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data));
  }, []);

  return (
    <>
      <Header setSearchKey={setSearchKey} />
      <ImageList cardClick={openModal} images={imageList} />
      <Popup showModal={showModal} closeModal={closeModal} modalData={modalData} />
      <h1>Hello Duniya!</h1>
    </>
  );
}

export default App;
