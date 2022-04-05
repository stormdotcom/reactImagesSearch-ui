import axios from 'axios';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Progress from './components/Progress';
import { ImageContext } from './context/ImageContext';
import Router from './routes/routes';

function App (){
    const params = useParams();
    const cliend_id = "ePnxayknzZ0SQcm2dDdy7_D67oW8sngnJ9oME91YHU0";
    const [loading, setLoading] = useState(false)
    const [imageList, setImageList ] = useState({
        total_pages: 0,
        results: [],
        total: 0
    })

    const searchImage = useCallback(
        async (query, pageno=1) => {
            setLoading(true);
            axios.get(`https://api.unsplash.com/search/photos?page=${pageno}&per_page=20&query=${query}&client_id=${client_id}`)
        .then((res)=> {
                setImageList(res.data);
                setLoading(false);
            })
            .catch((err)=> {
                setLoading(false);
                console.log("Error \n" + err.message +" \n " + err.response)
            })
        }
    )

    return (
        <ImageContext.Provider value={{
            imageList: imageList,
            searchImage : searchImage,
            loading: loading
        }}>
            <Router />
            <Progress />
        </ImageContext.Provider>
    )
}
