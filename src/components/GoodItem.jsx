import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardMedia, useTheme} from "@mui/material";
import {useContext} from "react";
import CartContext from "../store/CartContext";

function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    return words.join(" ");
}

export default function GoodItem(props) {
    const theme = useTheme();
    const cartContext = useContext(CartContext);

    const {
        offerId: id,
        displayName: title,
        displayDescription: description,
        displayAssets,
        rarity,
        price
    } = props;

    const addToCartHandler = () => {
        /*console.log({
            displayName,
            displayDescription: description,
            displayAssets: displayAssets[0].url,
            rarity: rarity.name,
            price: price.finalPrice
        })*/
        cartContext.addItem({
            id,
            title,
            description,
            displayAssets: displayAssets[0].url,
            rarity: rarity.name,
            price: price.finalPrice,
            amount: 1,
        });
    }
    return (
        <Card sx={{
            width: 345,
            marginBottom: '25px',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <CardContent sx={{
                flexGrow: 1,
                background: `linear-gradient(45deg, ${theme.palette.mode === 'dark' ? 'black, #2f2f2f' : '#cccccc, transparent'})`
            }}>
                <Typography size="small" sx={{mb:1.5, textAlign: 'right'}}>
                    Rarity: {capitalizeFirstLetter(rarity.name)}
                </Typography>
                {
                    'url' in displayAssets[0] && displayAssets[0].url
                        ?  <CardMedia
                            component="img"
                            sx={{height: 313}}
                            image={displayAssets[0].url}
                            title={title}
                        />
                        : ''
                }
                <CardContent>
                    <Typography variant="h5" component="div">{title}</Typography>
                    <Typography variant="body2">{description}</Typography>
                </CardContent>
            </CardContent>
            <CardActions sx={{
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '16px'
            }}>
                <Button size="medium" variant="contained" color="primary" onClick={addToCartHandler}>
                    Buy
                </Button>
                <Typography variant="p" sx={{fontSize:'1.2rem'}}>
                    {'finalPrice' in price && price.finalPrice ? price.finalPrice : '0'} $
                </Typography>
            </CardActions>
        </Card>
    );
}