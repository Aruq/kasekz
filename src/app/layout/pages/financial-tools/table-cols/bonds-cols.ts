export const bondsCols = [
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
    field: 'emitterName',
    translate: 'Company',
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
    field: 'nameBondTypeInterestPayment',
    lang: true,
    translate: 'Type'
  },
  {
    name: 'Trades opening date',
    field: 'tradeOpeningDate',
    translate: 'Trades opening date',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    date: true
  }
]
