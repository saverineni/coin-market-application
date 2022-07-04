import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Container, Header, Pagination, PaginationProps, Table,} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/rootReducer";
import {fetchCoins} from "../../redux/ducks/coinMarketsSlice";
import CoinListItem from "../coinListItem/CoinListItem";


export default function CoinsMarketList() {
    const dispatch = useDispatch();
    const [currency] = useState("eur");
    const [perPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (e: SyntheticEvent, pageInfo: PaginationProps) => {
        if (pageInfo.activePage) {
            setCurrentPage(+pageInfo.activePage);
            dispatch(fetchCoins({
                vs_currency: 'eur',
                order: 'market_cap_desc',
                per_page: perPage,
                page: pageInfo.activePage
            }));
        }
    };

    const coinMarketsData = useSelector(
        (state: RootState) => state.coinMarketsReducer.searchResults
    );

    useEffect(() => {
        dispatch(fetchCoins({vs_currency: 'eur', order: 'market_cap_desc', per_page: perPage, page: currentPage}));
    }, [dispatch]);

    return (
        <>
            <Header as='h1' textAlign={"center"} className="App-header">Crypto Currencies</Header>
            <Table basic="very" singleLine selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan="2" textAlign="center">
                            #
                        </Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Current Price</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">High 24 hour Price</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">Low 24 hour Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {coinMarketsData.map((coin) =>
                        <CoinListItem key={coin.id} coin={coin} currency={currency}/>
                    )}
                </Table.Body>
            </Table>
            <Container className="ui center aligned container">
                <Pagination
                    onPageChange={onPageChange}
                    activePage={currentPage}
                    siblingRange={3}
                    totalPages={25}
                ></Pagination>
            </Container>
        </>
    );
}
