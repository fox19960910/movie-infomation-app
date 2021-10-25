import React, { useEffect, useState } from 'react'
import Modal from './Modal';
import movieApi from '../../api/service/movieApi'
import { category, URL } from '../../utils/constant';
const ModalTrailer = (props) => {

    const { item,active,closeModal} = props;

    const [videoUrl,setVideoUrl] = useState(null)
   
   useEffect(() => {
    const getVideos = async () => {
        try{
            const videos = await movieApi.getVideoList(category.movie,item.id)
            if(videos && videos.results && videos.results.length > 0) {
                setVideoUrl(videos.results[0].key)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    getVideos()
   }, [item])
  
    return (
       <Modal active={active} closeModal={closeModal} id ={`modal-${item && item.id}`}>
            <iframe className="iframe-trailer" width="100%" height="500px" title="trailer" src={`${URL.VIDEO_URL}/${videoUrl}`}></iframe>
       </Modal>
    )
}

export default ModalTrailer
