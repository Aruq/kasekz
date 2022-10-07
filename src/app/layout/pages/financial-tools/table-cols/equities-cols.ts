export const equitiesCols = [
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
    field: 'instrumentCodeDto.emitterName',
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
    field: 'typeShareName',
    translate: 'typeShareName'
  },
  {
    name: 'Category',
    field: 'typeCategoryShareName',
    translate: 'typeCategoryShareName'
  },
  {
    name: 'Trades opening date',
    field: 'tradeOpenDate',
    translate: 'tradeOpenDate',
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    date: true
  },
  {
    name: 'Market Makers (null)',
    field: 'marketMaker',
    translate: 'marketMaker'
  },
  {
    name: '<div class="f-cc"><div class="t-center">T+ (null)<div></div>',
    field: 'schemaCalculate',
    translate: 'T+',
    textAlign: 'center',
  },
]
