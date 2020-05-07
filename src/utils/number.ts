export const format = (num: number, style = 'currency', options = {}) => {
  if(!num && num !== 0) {
    return null;
  }

  const optionsWithDefaults = {
    minimumFractionDigits: 2,
    style,
    currency: 'CNY',
    ...options
  }

  if(['currency', 'percent'].includes(style)) {
    return num.toLocaleString('zh-CN', optionsWithDefaults)
  }

  if(style == 'count') {
    return num.toFixed(0)
  }

  if(style == 'num') {
    return num.toLocaleString()
  }

  return num.toFixed(2)
}
