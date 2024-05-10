import React, { useEffect, useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./card/Card";
import Filter from "./filter-components/Filter";
import { Box } from "@mui/material";

const Home = () => {
  const filters = useSelector((state) => state.filters);
  const [jobData, setJobData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const fetchMoreData = async () => {
    const limit = 10;
    const url = `http://localhost:3000/api/jobs?limit=${limit}&offset=${offset}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      if (result.length === 0) {
        setHasMore(false);
      } else {
        setJobData((prevJobData) => [...prevJobData, ...result]);
        setOffset((prevOffset) => prevOffset + limit);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMoreData();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, hasMore]);



  return (
    <>
      <Filter />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        {jobData.map((job, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 20px)",
                md: "calc(33.33% - 20px)",
                lg: "calc(28% - 20px)",
              },
              mb: 6,
              mx: 6,
            }}
          >
            <Card job={job} />
          </Box>
        ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
          }}
          ref={loader}
        ></div>
      </Box>
    </>
  );
};

export default Home;