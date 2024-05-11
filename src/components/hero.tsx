import { Container } from "@mui/material";
import CustomCarousel from "./custom-carousel/custom-carousel";

function Hero() {
  return (
    <Container maxWidth="md" style={{ backgroundColor: "#aee2ff" }}>
      <CustomCarousel />
    </Container>
  );
}

export default Hero;
