import { useEffect, useState } from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';

function App() {

  const data = [
    {id: '1', image: 'https://source.unsplash.com/random/?city,night/'},
    {id: '2', image: 'https://source.unsplash.com/random/?city,day'},
    {id: '3', image: 'https://source.unsplash.com/random/?city,mexico'},
    {id: '4', image: 'https://source.unsplash.com/random/?city,brazil'}
  ]

  const [slidePreview, setSlidePreview] = useState(2)

  useEffect(() => {
    
    function handleResize() {
      (window.innerWidth < 720 ) ? setSlidePreview(1) : setSlidePreview(2)
    }
    
    handleResize()

    window.addEventListener("resize", handleResize) //resize = mexer na tela //toda x que fizer um resize na tela, chama a função
    
    return () => { //quando sair do componente, desmonta o eventListener
      window.removeEventListener("resize", handleResize)
    }

  },[])

  return (
    <>
      <div className="container">
        <h1 className="title">slider</h1>
      <Swiper
        slidesPerView={slidePreview}
        pagination={{clickable: true}}
        modules={[Navigation]}
        navigation={true}
      >
       {data.map( (item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.image}
            alt="img slider"
            className='slide-item'/>
        </SwiperSlide>
       ))}
      </Swiper>
      </div>
    </>
  )
}

export default App
