import { Home, Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "../context/ImageContext";

const Header = (props) => {
  let { searchImage } = useContext(ImageContext);
  const inputRef = useRef();
  const navigate = useNavigate();
  const searchHandler = () => {
    if (inputRef.current.value.trim() === "") {
      return;
    } else {
      searchImage(inputRef.current.value).then(() => {
        navigate(`/query=${inputRef.current.value}&page=1`);
      });
    }
  };
  return (
    <>
      <div
        style={{
          height: 50,
          background: "blue",
          alignItems: "center",
          display: "flex",
        }}
      >
        <TextField
          onKeyDown={(e) => {
            if (e.key === "Eneter") {
              searchHandler();
            }
          }}
          inputRef={inputRef}
          variant="outlined"
          size="small"
          sx={{ background: "white", marginLeft: 2 }}
          placeholder="Search"
        />
        <IconButton
          sx={{
            ml: 2,
            background: "white",
            ":hover": { background: "lightblue" },
          }}
          onClick={() => {
            searchHandler();
          }}
        >
          <Search />
        </IconButton>
        <h3 style={{ marginLeft: 100, color: "whitesmoke" }}>Images</h3>
        <IconButton
          onClick={() => {
            navigate("/");
          }}
          sx={{
            mr: 5,
            background: "white",
            ":hover": { background: "lightblue" },
            position: "absolute",
            right: 0,
          }}
        >
          <Home />
        </IconButton>
      </div>
      <div style={{ margin: 5 }}>{props.children}</div>
    </>
  );
};

export default Header;
