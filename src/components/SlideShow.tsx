import { Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Slideshow = ({ slides }: { slides: { src: string; alt: string }[] }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <Box textAlign="center" maxWidth="1000px" mx="auto" position="relative">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === slideIndex ? (
            <motion.div
              key={index}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                top: 0,
                overflowX: "hidden",
                transform: "translateX(-50%)",
              }}
            >
              <Box position="relative" minW={["400px", "max-content"]} minH="100%">
                <div style={{ position: "relative" }}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "400px" }} // optional
                  />
                </div>
              </Box>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Slideshow;
