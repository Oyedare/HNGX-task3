"use client"
// import { images } from '@/data/data'
import authCheck from '@/hooks/authCheck'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img1 from '@/public/assets/1.jpg'
import img2 from '@/public/assets/2.jpg'
import img3 from '@/public/assets/3.jpg'
import img4 from '@/public/assets/4.jpg'
import img5 from '@/public/assets/5.jpg'
import img6 from '@/public/assets/6.jpg'
import img7 from '@/public/assets/7.jpg'
import img8 from '@/public/assets/8.jpg'
import img9 from '@/public/assets/9.jpg'
import img10 from '@/public/assets/10.jpg'
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setImages([
        { src: img1, tags: ['Meme 1'] },
        { src: img2, tags: ['Meme 2'] },
        { src: img3, tags: ['Meme 3'] },
        { src: img4, tags: ['Meme 4'] },
        { src: img5, tags: ['Meme 5'] },
        { src: img6, tags: ['Meme 6'] },
        { src: img7, tags: ['Meme 7'] },
        { src: img8, tags: ['Meme 8'] },
        { src: img9, tags: ['Meme 9'] },
        { src: img10, tags: ['Meme 10'] },
      ])
      setLoading(false)
    },3000)
  },[])
  

  const [searchTerm, setSearchTerm] = useState('');

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    const sourceIndex = e.dataTransfer.getData('index');
    const newImages = [...images];
    const [draggedImage] = newImages.splice(sourceIndex, 1);
    newImages.splice(targetIndex, 0, draggedImage);
    setImages(newImages);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  return (
    <div className='container gallery-container'>
      <input
        type="text"
        placeholder="Search by tag"
        value={searchTerm}
        onChange={handleSearch}
        className={'input'}
      />

      {loading ? (
        <>
          <div className={'skeletonLoader'}></div>
          <div className={'skeletonLoader'}></div>
          <div className={'skeletonLoader'}></div>
        </>
      ):(
        <div className={'imageGrid'}>
          {filteredImages.map((image,index) => (
            <div
              key={index}
              className={'imageContainer'}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <Image width={'100%'} height={'100%'} src={image.src} alt={`Image ${index}`} />
              <div className={'tags'}>
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={'tag'}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default authCheck(Gallery)