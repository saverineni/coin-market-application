import React, {ReactElement} from 'react';
import {Image, List, Table} from 'semantic-ui-react';
import {CoinsRawResponse} from "../../shared/Interfaces";
import {useNavigate} from "react-router-dom";
import {fetchCoinDetails} from "../../redux/ducks/coinDetailsSlice";
import {useDispatch} from "react-redux";

interface Props {
    coin: CoinsRawResponse;
    currency: string;
}

export default function CoinListItem(props: Props): ReactElement {
    const dispatch = useDispatch();
    const coin = props.coin;
    const history = useNavigate();

    const currencyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: props.currency,});

    const onCoinDetail = () => {
        dispatch(fetchCoinDetails({coinId: coin.id}));
        history(`/coins/${coin.id}`);
    };

    return (
        <Table.Row className="enlarge">
            <Table.Cell textAlign="center">

            </Table.Cell>
            <Table.Cell>{coin.market_cap_rank}</Table.Cell>
            <Table.Cell>
                <List verticalAlign="middle">
                    <List.Item onClick={onCoinDetail} style={{cursor: 'pointer'}}>
                        <Image avatar src={coin.image}/>
                        <List.Content>
                            <List.Header>
                                {coin.name} <span id="grey"> {coin.symbol.toUpperCase()}</span>
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List>
            </Table.Cell>
            <Table.Cell className="bold" textAlign="center">
                {currencyFormatter.format(coin.current_price)}
            </Table.Cell>
            <Table.Cell textAlign="right">
                {currencyFormatter.format(coin.high_24h)}
            </Table.Cell>
            <Table.Cell textAlign="right">
                {currencyFormatter.format(coin.low_24h)}
            </Table.Cell>
        </Table.Row>
    );
}

