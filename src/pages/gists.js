import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists } from "../store/gists";

import { Button, Box, ButtonGroup } from "@mui/material";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

export function GistsPage() {
  const dispatch = useDispatch();
  const { gists, error, pending } = useSelector((state) => state.gists);

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists(1));
    }
  }, [dispatch, gists]);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div
      style={{
        justifyContent: "center",
        color: "grey",
        height: "calc(70vh + 100px)",
        margin: "20px 0 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="small" color="info" aria-label="medium button group">
          {Array.from({ length: 10 }).map((_, i) => (
            <Button onClick={() => dispatch(getGists(i + 1))} key={i}>
              {i + 1}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      {pending ? (
        <CachedOutlinedIcon
          style={{
            fontSize: "84px",
          }}
        />
      ) : (
        gists?.map((gist, index) => <h1 key={index}>{gist.commits_url}</h1>)
      )}
    </div>
  );
}
