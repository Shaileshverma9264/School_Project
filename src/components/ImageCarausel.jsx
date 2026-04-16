import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "https://cdn.pixabay.com/photo/2026/04/02/10/59/gruendercoach-robin-10205230_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/08/16/14/21/ai-generated-8973951_1280.png",
  "https://cdn.pixabay.com/photo/2016/06/15/18/11/class-1459570_1280.png",
  "https://cdn.pixabay.com/photo/2016/06/15/18/11/class-1459570_1280.png",
  "https://cdn.pixabay.com/photo/2016/06/15/18/11/class-1459570_1280.png",
  // add all 20 images here
];

export default function ImageCarousel() {
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={img}
              alt={`slide-${index}`}
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
