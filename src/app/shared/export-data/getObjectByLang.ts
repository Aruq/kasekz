export function getObjectByLang(value: string, lang: string) {
  if (lang === 'ru') {
    return value + '.rus';
  } else if (lang === 'en') {
    return value + '.eng';
  } else if (lang === 'kz') {
    return value + '.kaz';
  }
  // if (value) {
  //   if (lang === 'ru') {
  //     value.replace('eng', 'rus')
  //     value.replace('kaz', 'rus')
  //   } else if (lang === 'en') {
  //     value.replace('rus', 'eng')
  //     value.replace('kaz', 'eng')
  //   } else if (lang === 'kz') {
  //     value.replace('rus', 'kaz')
  //     value.replace('eng', 'kaz')
  //   }
  //   console.log(value)
  // }
  return value
}
