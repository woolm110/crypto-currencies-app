import _ from 'lodash';

const CURRENCIES = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#FF7300',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#8C01FF',
  },
  {
    name: 'ZCash',
    symbol: 'ZEC',
    color: '#F0AD4E',
  },
  {
    name: 'Monero',
    symbol: 'XMR',
    color: '#CF4900',
  },
  {
    name: 'Dash',
    symbol: 'DASH',
    color: '#1E73BE',
  },
  {
    name: 'MaidSafeCoin',
    symbol: 'MAID',
    color: '#5592D7',
  },
  {
    name: 'Pascal',
    symbol: 'PASC',
    color: '#1162A1',
  },
  {
    name: 'Bit Crystal',
    symbol: 'BCY',
    color: '#CF4900',
  },
  {
    name: 'Nexium',
    symbol: 'NXC',
    color: '#F0AD4E',
  },
];

const currencyData = (currencySymbol) => (
  _.find(CURRENCIES, data => data.symbol === currencySymbol)
);

const currencyColors = {};
CURRENCIES.forEach(currency => currencyColors[currency.symbol] = currency.color);

export {
  CURRENCIES,
  currencyData,
  currencyColors,
};
