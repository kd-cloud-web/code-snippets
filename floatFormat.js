/**
 * 处理小数位数
 * @param {String, Number} num 要处理的数字
 * @param {Number} count 需要保留的位数
 * @param {Boolean} retain 如果不是小数的是否需要保留小数
 */
export function formateFloat(num, count, retain) {
  const tmpArr = num.toString().split('.');
  let floatArr = [], floatStr = '';
  if (Number(tmpArr[1])) { // 是小数
    let tmpStr = tmpArr[1];
    floatStr = tmpStr.substring(0, count);
    if (tmpStr[count] >= 5) { // 四舍五入
      floatStr = (Number(floatStr)+1).toString();
    }
    if (floatStr.length !== count) {
      let len = count - floatStr.length;
      if (len < 0) {
        floatStr = '';
        for (let i = 0; i < count; i++) {
          floatStr = floatStr + '0';
        }
        return [tmpArr[0]+1, floatStr].join('.');
      }
      for (let i = 0; i < len; i++) {
        floatStr = '0' + floatStr;
      }
    }
    return [tmpArr[0], floatStr].join('.');
  } else { // 不是小数
    if (retain) { // 如果需要保留小数
      for (let i = 0; i < count; i++) {
        floatArr.push(0);
      }
      floatStr = floatArr.join('');
      return [tmpArr[0], floatStr].join('.');
    }
    return num;
  }
}
