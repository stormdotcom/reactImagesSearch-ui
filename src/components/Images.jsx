import React from 'react'
import { Grid, Pagination } from "@mui/material";
import { useContext, useEffect, } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";
import CardCommon from "./Card";
import Header from "./Header";

function Images() {
  const  { imageList, searchImage, loading} = useContext(ImageContext)
  const navigate = useNavigate()
  const params= useParams()
  console.log(params.query)
  useEffect(()=>{
    searchImage(params.query, params.pageno).then(()=>{
      navigate(`/query=${params.query}&page=${params.pageno}`, {
        replace: true
      });
    });
  },[params.query, params.pageno])
  return (
   <Header>
     {imageList.results.length > 0 ? (
       <>
       <Grid container spacing={1} justifyContent='center' >
          <Grid container spacing={1} justifyContent='center' >
            {imageList.results.map((image)=> {
              return <Grid 
                      item
                      key={image.id}
                     
                      sm={6}
                      md={12 / 5}
                      lg={12 / 5}
                        >
                      <Link  to={`/image=${image.id}`} state={image}>
                        <CardCommon
                        imagePath={image.urls.small}
                        alt={image.id}
                        />
                      </Link>

                    </Grid>
            })}
          </Grid>
          <Pagination 
            count={imageList.total_pages}
            onChange={((e, p)=>{
              searchImage(params.query, p).then(()=>{
                navigate(`/query=${params.query}&page=${p}`);
              })
            })}
            variant="outlined"
            shape="rounded"
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
              marginTop: 20,
              
            }}
          >

          </Pagination>
       </Grid>
       </>
     ) : (
       <>
       {!loading && (
         <div
          style={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          >
            <h3> No Images Found </h3>
            </div>
       )}
       </>
     )}
   </Header>
  )
}

export default Images