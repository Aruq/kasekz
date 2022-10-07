export const contractsCols = [
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
    name: 'Базовый актив',
    field: 'underlyingAsset',
    translate: 'Базовый актив'
  },
  {
    name: 'Количество',
    field: 'numberSecurities',
    translate: 'Количество',
  },
  {
    name: 'Исполнение (null)',
    field: 'marketMaker',
    translate: 'Исполнение'
  }
]
