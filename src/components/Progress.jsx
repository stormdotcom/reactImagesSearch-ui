import { Backdrop, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ImageContext } from  "../context/ImageContext";

const Progress = () => {
  const { loading } = useContext(ImageContext);
  return (
    <div>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress
            size={50}
            sx={{
              color: "green",
              position: "absolute",
              top: 300,
              left: 750,
              zIndex: 1,
            }}
          />
        </Backdrop>
      )}
    </div>
  );
};

export default Progress;
