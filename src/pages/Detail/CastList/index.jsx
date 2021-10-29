import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import movieApi from '../../../api/service/movieApi';
import apiConfig from '../../../api/apiConfig';


const CastList = (props) => {
    const {id} = props;
    const {category} = useParams()
    const [casts, setCasts] = useState([])

    useEffect(() => {
        let res =null;
        const params = {};
        const getCasts = async () => {
            try{
                res = await movieApi.credits(category,id,{params})
                if(res){
                    setCasts(res.cast)
                }
            }catch(err){
                console.log(err)
            }
        } 
        getCasts();
    }, [category,id])
    return (
        <div className="casts">
            {
                casts && casts.length > 0 && casts.map(item => (
                    <div key={item.id} className="casts__item">
                        <div className="casts__item-bg" style={{backgroundImage:`url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item-name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CastList
