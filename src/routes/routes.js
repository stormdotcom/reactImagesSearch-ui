import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Image from "../components/Image";
import ImagesList from "../components/Images";
import PageNotFound from "../components/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/query=:query&page=:pageno" element={<ImagesList />}></Route>
      <Route path="/image=:imageid" element={<Image />}></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
