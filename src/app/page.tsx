import Hero from "@/components/hero";
import { Box, Container, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box>
        <Paper elevation={0} style={{ backgroundColor: "#aee2ff" }}>
          <Hero />
        </Paper>
      </Box>
      <Box>
        <Container maxWidth="md">Movies list</Container>
      </Box>
    </Box>
  );
}
