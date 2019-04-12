/**
 * 计算时间段
 * @param {Number} time 当前时间戳（秒）
 */
export function timePeriod(time) {
  time = + time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 60) {
    return '刚刚';
  } else if (diff < 3600) { // less 1 hour
    return Math.floor(diff / 60) + '分钟前';
  } else if (diff < 3600 * 24) {
    return Math.floor(diff / 3600) + '小时前';
  } else if (diff < 3600 * 24 * 31) {
    return  Math.floor(diff / (3600 * 24)) + '天前';
  } else if (diff < 3600 * 24 * 31 * 12) {
    return  Math.floor(diff / (3600 * 24 * 31)) + '个月前';
  } else {
    return  Math.floor(diff / (3600 * 24 * 31 * 12)) + '年前';
  }
}

/**
 * 持续时长
 * @param {Number} time 当前时间戳（秒）
 */
function lastTimeFomat(time) {
  let y = 0, m = 0, d = 0, h = 0, mi = 0, s = 0;
  let tmp = time;
  if (time > 31536000) { // 大于1年
    y = Math.floor(tmp / 31536000);
    tmp = tmp - y * 31536000;
    m = Math.floor(tmp / 2592000);
    tmp = tmp - m * 2592000;
    d = Math.floor(tmp / 86400);
    return `${y}年${m ? `${m}月` : ''}${d ? `${d}天` : ''}`;
  } else if (time > 2592000) { // 大于1月
    m = Math.floor(tmp / 2592000);
    tmp = tmp - m * 2592000;
    d = Math.floor(tmp / 86400);
    return `${m}月${d ? `${d}天` : ''}`;
  } else if (time > 86400) { // 天
    d = Math.floor(tmp / 86400);
    tmp = tmp - d * 86400;
    h = Math.floor(tmp / 3600);
    return `${d}天${h ? `${h}小时` : ''}`;
  } else {
    h = Math.floor(tmp / 3600);
    tmp = tmp - h * 3600;
    mi = Math.floor(tmp / 60);
    s = tmp - mi * 60;
    return `${h ? `${h}小时` : ''}${mi ? `${mi}分` : ''}${s ? `${s}秒` : ''}`;
  }
}

