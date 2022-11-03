export const esg = [
    {
      name: 'Торговый код',
      field: 'instrumentCode',
      translate: 'instrumentCode',
      underline: 'underline',
      pointer: 'pointer',
      navigateTo: 'ToolSpecification'
    },
    {
      name: 'Зеленые облигации',
      field: 'emitterName',
      translate: 'Company',
      underline: 'underline',
      pointer: 'pointer',
      navigateTo: 'Issuer'
    },
    {
      name: 'Социальные облигации',
      field: 'isin',
      translate: 'isin'
    },
    {
      name: 'Компании, раскрывающие ESG информацию',
      field: 'nameBondTypeInterestPayment',
      lang: true,
      translate: 'Type'
    },
    {
      name: 'ESG верификаторы',
      field: 'tradeOpeningDate',
      translate: 'Trades opening date',
      textAlign: 'center',
      whiteSpace: 'break-spaces',
      date: true
    }
  ]
  