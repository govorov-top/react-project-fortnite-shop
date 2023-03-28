import {useState} from "react";
import CartModal from "./CartModal";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import {Badge} from "@mui/material";


function Cart (props){
    const {quantity = 0} = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Box sx={{mr:1}} onClick={handleOpen}>
                <IconButton color="inherit" sx={{ml:1}}>
                    <Badge badgeContent={quantity} color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </Box>
            <CartModal open={open} onHandleClose={handleClose}/>
        </>
    );

}

export default Cart;