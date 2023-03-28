import GoodItem from "./GoodItem";
import styles from "../assets/components/CardList.module.scss";
import React from "react";
import Container from "@mui/material/Container";

function GoodsList({goods = []}) {
    return (
        <Container sx={{padding: '50px 0'}}>
            <div className={styles.movies}>
                {
                    goods.length
                        ? goods.map(good => <GoodItem
                            key={good.offerId}
                            {...good}
                        />)
                        : <h2>Not found...</h2>
                }
            </div>
        </Container>
    );
}

export default GoodsList;