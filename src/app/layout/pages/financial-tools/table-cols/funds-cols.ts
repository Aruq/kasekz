export const fundsCols = [
  {
    name: 'Ticker',
    field: 'instrumentCode',
    translate: 'instrumentCode',
    underline: 'underline',
    pointer: 'pointer',
    navigateTo: 'ToolSpecification'
  },
  {
    name: 'Company',
    field: 'shortName',
    translate: 'instrumentCodeDto',
    underline: 'underline',
    pointer: 'pointer',
    navigateTo: 'Issuer'
  },
  {
    name: 'ISIN',
    field: 'isin',
    translate: 'isin'
  },
  {
    name: 'Type',
    field: 'nameKaseOfficialMarket',
    lang: true,
    translate: 'typeShareName'
  },
  {
    name: 'Trades opening date',
    field: 'dateOpeningTrades',
    translate: 'dateOpeningTrades',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    date: true
  },
  {
    name: 'Market Makers (null)',
    field: 'marketMaker',
    translate: 'marketMaker'
  }
]
