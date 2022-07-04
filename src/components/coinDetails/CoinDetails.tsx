import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {Breadcrumb, Header, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function CoinDetails() {

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'Eur',
    });

    const coinDetailsData = useSelector(
        (state: RootState) => state.coinDetailsReducer.searchResult
    )

    return (
        <>
            <Header as='h1' textAlign={"center"} className="App-header">Coin Details</Header>
            <Breadcrumb size="small">
                <Link to="/coins">
                    <Breadcrumb.Section>Cryptocurrencies</Breadcrumb.Section>
                </Link>
                <Breadcrumb.Divider icon="right chevron"/>
                <Breadcrumb.Section active>{coinDetailsData.name}</Breadcrumb.Section>
            </Breadcrumb>

            <Table basic="very" singleLine selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="left">Symbol</Table.HeaderCell>
                        <Table.HeaderCell textAlign="left">Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="left">Hashing Algorithm</Table.HeaderCell>
                        <Table.HeaderCell textAlign="left">Genesis Date</Table.HeaderCell>
                        <Table.HeaderCell textAlign="left">Market Cap (EUR)</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row className="enlarge">
                        <Table.Cell textAlign="left">{coinDetailsData.symbol}</Table.Cell>
                        <Table.Cell textAlign="left">{coinDetailsData.name}</Table.Cell>
                        <Table.Cell textAlign="left">{coinDetailsData.hashing_algorithm}</Table.Cell>
                        <Table.Cell textAlign="left">{coinDetailsData.genesis_date}</Table.Cell>
                        <Table.Cell textAlign="left">{currencyFormatter.format(coinDetailsData.market_data.market_cap.eur)}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
}
