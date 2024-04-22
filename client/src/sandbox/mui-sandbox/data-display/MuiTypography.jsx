import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box, Button, Chip, IconButton } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RamenDiningRoundedIcon from "@mui/icons-material/RamenDiningRounded";
// const MuiTypography = () => {
//   return (
//     <>
//       <Typography variant="h5" align="center">
//         hola
//       </Typography>
//       <Typography variant="h3" align="center">
//         two
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography variant="h5" component="p" align="center">
//         hola
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography
//         variant="h5"
//         component="p"
//         align="center"
//         sx={{ color: "red", fontWeight: "bold" }} // in line style
//       >
//         supp??
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   const style = { color: "red", fontWeight: "bold" };
//   return (
//     <>
//       <Typography variant="h5" component="p" align="center" sx={style}>
//         supp??
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography fontWeight={300}>hola</Typography>
//       <Typography fontWeight={400}>hola</Typography>
//       <Typography fontWeight={500}>hola</Typography>
//       <Typography fontWeight={600}>hola</Typography>
//       <Typography fontWeight={700}>hola</Typography>
//       <Typography sx={{ fontWeight: 700 }}>hola</Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography fontWeight={700} variant="h5" color="primary.light">
//         hola
//       </Typography>
//       <Typography fontWeight={700} variant="h5" color="primary.main">
//         hola
//       </Typography>
//       <Typography fontWeight={700} variant="h5" color="primary.dark">
//         hola
//       </Typography>
//       <Typography fontWeight={700} variant="h5" color="success.dark">
//         hola
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography fontWeight={700} variant="body1" component="span">
//         hola :
//         <Typography component="span" variant="body1">
//           {" "}
//           helllo
//         </Typography>
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography noWrap>
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//         occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum."
//       </Typography>
//       <hr />
//       <Typography>
//         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
//         illo inventore veritatis et quasi architecto beatae vitae dicta sunt
//         explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
//         odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
//         quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
//         eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
//         voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
//         corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
//         Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
//         quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
//         voluptas nulla pariatur?"
//       </Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Typography>item 1</Typography>
//       <Divider />
//       <Typography>item 2</Typography>
//       <Divider light />
//       <Typography>item 3</Typography>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Box display="flex">
//         <Typography p={1} variant="body1" color="initial">
//           item 1
//         </Typography>
//         <Divider orientation="vertical" flexItem />
//         <Typography p={1} variant="body1" color="initial">
//           item 2
//         </Typography>
//       </Box>
//     </>
//   );
// };

// const MuiTypography = () => {
//   return (
//     <>
//       <Box>
//         <Typography p={1} variant="body1" color="initial">
//           item 1
//         </Typography>
//         <Divider>CENTER</Divider>
//         <Typography p={1} variant="body1" color="initial">
//           item 2
//         </Typography>
//         <Divider textAlign="left">LEFT</Divider>
//         <Typography p={1} variant="body1" color="initial">
//           item 2
//         </Typography>
//         <Divider textAlign="right">RIGHT</Divider>
//         <Typography p={1} variant="body1" color="initial">
//           item 2
//         </Typography>
//         <Divider>
//           <Chip label="miro" color="primary" />
//         </Divider>
//         <Typography p={1} variant="body1" color="initial">
//           item 2
//         </Typography>
//       </Box>
//     </>
//   );
// };

const MuiTypography = () => {
  return (
    <>
      <Box m={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DeleteRoundedIcon />}
        >
          delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<RamenDiningRoundedIcon />}
        >
          delete
        </Button>
        <Button variant="contained" color="error" endIcon={<LocalPhoneIcon />}>
          delete
        </Button>
        <Button
          variant="contained"
          color="success"
          endIcon={<LocalPhoneIcon />}
          fullWidth
        >
          success
        </Button>
      </Box>
    </>
  );
};

// const MuiTypography = () => {
//   return (
//     <>
//       <Box>
//         <IconButton aria-label="delete">
//           <DeleteRoundedIcon />
//         </IconButton>
//       </Box>
//     </>
//   );
// };

export default MuiTypography;
