import {CardMedia, Divider, List, ListItem, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import {useContext} from "react";
import CartContext from "../store/CartContext";
export default function CartModalItem(props) {
    const cartContext = useContext(CartContext);
    const deleteItemHandler = () => {
        cartContext.removeItem(props.item.id);
    }
    const addItemHandler = () => {
        cartContext.addItem({...props.item, amount: 1});
    }
    return (
        <div>
            <List
                sx={{
                    width: '100%',
                }}
            >
                <ListItem>
                    <CardMedia
                        component="img"
                        wight="100"
                        height="100"
                        image={props.item.displayAssets}
                        alt={props.item.title}
                        sx={{maxWidth: 100, mr:1}}
                    />
                    <ListItemText primary={props.item.title} secondary={`${props.item.price} $ x ${props.item.amount} = ${props.item.price * props.item.amount} $`} />
                    <Typography variant="p">
                        <DeleteOutlineIcon onClick={deleteItemHandler} sx={{cursor:'pointer'}}/>
                        <AddIcon onClick={addItemHandler} sx={{cursor:'pointer'}}/>
                    </Typography>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </div>
    );
}