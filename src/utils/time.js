/**
 * 转换时间格式
 * @param {Date|string} date 时间
 * @param {string} fmt yyyy-MM-dd HH:mm:ss
 */
export function parseTime(date, fmt = 'yyyy-MM-dd HH:mm:ss') {
    const _date = getDate(date);
    const o = {
      'M+': _date.getMonth() + 1, //月份
      'd+': _date.getDate(), //日
      'h+': _date.getHours() % 12 === 0 ? 12 : _date.getHours() % 12, //小时
      'H+': _date.getHours(), //小时
      'm+': _date.getMinutes(), //分
      's+': _date.getSeconds(), //秒
      'q+': Math.floor((_date.getMonth() + 3) / 3), //季度
      'S': _date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
  
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
  
  /**
   * 获取正确格式的时间
   * @param {*} date 
   * @returns {Date}
   */
  export function getDate(date = null) {
    if (!date) {
      return new Date();
    }
  
    if (isDate(date)) {
      return date;
    }
  
    if (typeof date === 'string') {
      return new Date(date.replace(/-/g, '/'));
    }
  
    if (typeof date === 'number') {
      return new Date(date);
    }
  
  }
  
  /**
   * 判定是否为时间
   * @param {*} date 
   */
  export function isDate(date) {
    return Object.prototype.toString.call(date) === '[object Date]';
  }
  