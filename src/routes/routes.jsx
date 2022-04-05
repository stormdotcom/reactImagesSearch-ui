import { Routes, Route} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Image from '../components/Image';
import ImageList from '../components/Images'
import PageNotFound from '../components/PageNotFound';


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage /> } />
            <Route  path='/query=:query&page=:pageno' element={<ImageList /> } />
            <Route path='/image=:imageid' element={<Image /> } />
            <Route path="*" element={<PageNotFound /> } />

        </Routes>
    )
}

export default Router;