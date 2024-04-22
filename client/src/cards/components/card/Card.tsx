import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
const CardJ = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg"
        alt="amro atamny"
      />{" "}
      <CardContent>
        <Typography variant="h5" component="p">
          forth
        </Typography>
        <Typography component="p" color="gray">
          subtitle
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="body1" color="gray" fontWeight={500}>
          phone: <Typography component="span">050-000000</Typography>
        </Typography>
        <Typography variant="body1" color="gray" fontWeight={500}>
          Address: <Typography component="span">tel-aviv</Typography>
        </Typography>
        <Typography variant="body1" color="gray" fontWeight={500}>
          Card Number: <Typography component="span">213727969</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <DeleteIcon aria-label="delete" />
        </IconButton>
        <IconButton>
          <EditIcon aria-label="edit" />
        </IconButton>
        <IconButton sx={{ left: 95 }}>
          <LocalPhoneIcon aria-label="phone" />
        </IconButton>
        <IconButton sx={{ left: 90 }}>
          <FavoriteIcon aria-label="add to favorites" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardJ;
