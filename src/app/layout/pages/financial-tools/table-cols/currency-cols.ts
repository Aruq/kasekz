export const currencyCols = [
  {
    name: 'Код',
    field: 'instrumentCode',
    translate: 'Код',
    underline: 'underline',
    pointer: 'pointer',
    navigateTo: 'ToolSpecification'
  },
  {
    name: 'Наименование',
    field: 'emitterName',
    translate: 'Наименование',
    underline: 'underline',
    pointer: 'pointer',
    navigateTo: 'Issuer'
  },
  {
    name: 'Краткое наименование',
    field: 'name',
    lang: true,
    translate: 'Краткое наименование'
  },
  {
    name: 'Т+',
    field: 'foreignCurrenciesCamundaCustomTypeDTO.foreignCurrenciesStockMarketDTO.nameCalculationScheme',
    lang: true,
    translate: 'Т+'
  }
]
