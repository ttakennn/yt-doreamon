"use client";

import { fetchMovies } from "@/app/api/movei-api";
import MovieCard from "@/components/movie/movie-card";
import { MovieProps, MovieResponse } from "@/interface";
import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const initialPage = 2;

export default function MovieLoadMore() {
  const { ref, inView } = useInView();

  const [loadMore, setLoadMore] = useState(true);

  const [page, setPage] = useState(initialPage);
  const [movieList, setMovieList] = useState<MovieProps[]>([]);

  useEffect(() => {
    if (inView && loadMore) {
      fetchNextPage();
    }
  }, [inView]);

  const fetchNextPage = async () => {
    try {
      const movieResponse: MovieResponse = await fetchMovies(page);
      if (movieResponse.data.length > 0) {
        setMovieList((prevMovies) => [...prevMovies, ...movieResponse.data]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setLoadMore(false);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", mt: 2 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {movieList.map((movie: MovieProps) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      {loadMore && (
        <Box
          ref={ref}
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
