

export interface Roi {
    times: number;
    currency: string;
    percentage: number;
}

export interface Description {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pl: string;
    ro: string;
    hu: string;
    nl: string;
    pt: string;
    sv: string;
    vi: string;
    tr: string;
    ru: string;
    ja: string;
    zh: string;
    'zh-tw': string;
    ko: string;
    ar: string;
    th: string;
    id: string;
}

export interface Links {
    homepage: string[];
}

export interface MarketCap {
    eur: number;
}

export interface MarketData {
    market_cap: MarketCap;
}

export interface CoinsRawResponse {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: any;
    market_cap_rank: number;
    fully_diluted_valuation?: number;
    total_volume: any;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: any;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply?: number;
    max_supply?: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi: Roi;
    last_updated: Date;
}

export interface CoinDetailRawResponse {
    symbol: string;
    name: string;
    hashing_algorithm: string;
    genesis_date: string;
    links?: Links;
    description?: Description;
    market_data: MarketData;
}

