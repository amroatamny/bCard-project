import React from "react";
import ImageInterface from "../../interface/ImageInterface";
import CardMedia from "@mui/material/CardMedia";
type Props = { image: ImageInterface };

const CardHead: React.FC<Props> = ({ image }) => {
  return (
    <CardMedia
      component="img"
      src={image.url}
      alt={image.alt}
      sx={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
    />
  );
};

export default CardHead;
