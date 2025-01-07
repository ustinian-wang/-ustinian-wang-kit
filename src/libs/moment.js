import moment from 'moment';

const DEFAULT_FORMAT = "YYYY-MM-DD HH:mm:ss";
/**
 * 字符串转换为 Moment 对象
 * @param {string} dateStr - 日期字符串
 * @param {string} format - 日期格式
 * @returns {Moment} - Moment 对象
 * @example 
 * stringToMoment("2024-01-01 12:00:00", "YYYY-MM-DD HH:mm:ss")
 * stringToMoment("2024-01-01", "YYYY-MM-DD")
 * stringToMoment("2024-01-01 12:00:00", "YYYY-MM-DD HH:mm:ss")
 */
export function stringToMoment(dateStr, format = DEFAULT_FORMAT) {
    return moment(dateStr, format);  // 使用自定义格式
}

/**
 * 时间戳（数字）转换为 Moment 对象
 * @param {number} timestamp - 时间戳
 * @returns {Moment} - Moment 对象
 * @example
 * timestampToMoment(1714857600000)
 */
export function timestampToMoment(timestamp) {
  return moment(timestamp);  // 直接转换为 Moment 对象
}

/**
 * JavaScript Date 对象转换为 Moment 对象
 * @param {Date} date - JavaScript Date 对象
 * @returns {Moment} - Moment 对象
 * @example
 * dateToMoment(new Date())
 */
export function dateToMoment(date) {
  return moment(date);  // 将 Date 对象转换为 Moment 对象
}

/**
 * 数组（[year, month, day]）转换为 Moment 对象
 * @param {Array} dateArray - 包含年、月、日的数组
 * @returns {Moment} - Moment 对象
 * @example
 * dateArrToMoment([2024, 1, 1])
 */
export function dateArrToMoment(dateArray) {
  return moment(dateArray);  // 传入年、月、日数组
}

/**
 * ISO 8601 格式字符串转换为 Moment 对象
 * @param {string} isoStr - ISO 8601 格式字符串
 * @returns {Moment} - Moment 对象
 * @example
 * isoStrToMoment("2024-01-01T12:00:00Z")
 */
export function isoStrToMoment(isoStr) {
  return moment(isoStr);  // 解析 ISO 8601 字符串
}

/**
 * 对象转换为 Moment 对象（包含年、月、日等信息）
 * @param {Object} dateObject - 包含年、月、日等属性的对象
 * @returns {Moment} - Moment 对象
 * @example
 * objToMoment({year: 2024, month: 1, day: 1})
 */
export function objToMoment(dateObject) {
  return moment(dateObject);  // 传入包含年、月、日等属性的对象
}

/**
 * UTC 时间字符串转换为 Moment 对象
 * @param {string} utcStr - UTC 时间字符串
 * @returns {Moment} - Moment 对象
 * @example
 * utcStrToMoment("2024-01-01T12:00:00Z")
 */
export function utcStrToMoment(utcStr) {
  return moment.utc(utcStr);  // 使用 UTC 时间解析
}

/**
 * 毫秒数（持续时间）转换为 Moment 持续时间对象
 * @param {number} millis - 毫秒数
 * @returns {Moment.Duration} - Moment 持续时间对象
 * @example
 * millisToDuration(1714857600000)
 */
export function millisToDuration(millis) {
  return moment.duration(millis);  // 转换为 Moment 持续时间对象
}

/**
 * Moment 对象转换为字符串
 * @param {Moment} momentObj - Moment 对象
 * @param {string} format - 日期格式
 * @returns {string} - 日期字符串
 * @example
 * momentToString(moment(), "YYYY-MM-DD HH:mm:ss")
 */
export function momentToString(momentObj, format = 'YYYY-MM-DDTHH:mm:ssZ') {
  return momentObj.format(format);  // 使用自定义格式输出字符串
}

/**
 * Moment 对象转换为时间戳（毫秒数）
 * @param {Moment} momentObj - Moment 对象
 * @returns {number} - 时间戳（毫秒数）
 * @example
 * momentToTimestamp(moment())
 */
export function momentToTimestamp(momentObj) {
  return momentObj.valueOf();  // 返回时间戳（毫秒数）
}

/**
 * Moment 对象转换为 JavaScript Date 对象
 * @param {Moment} momentObj - Moment 对象
 * @returns {Date} - JavaScript Date 对象
 * @example
 * momentToDate(moment())
 */
export function momentToDate(momentObj) {
  return momentObj.toDate();  // 返回 JavaScript Date 对象
}

/**
 * Moment 对象转换为 UTC 字符串
 * @param {Moment} momentObj - Moment 对象
 * @returns {string} - UTC 时间字符串
 * @example
 * momentToUTCString(moment())
 */
export function momentToUTCString(momentObj) {
  return momentObj.utc().format();  // 输出 UTC 时间字符串
}

/**
 * Moment 持续时间对象转换为毫秒数
 * @param {Moment.Duration} durationObj - Moment 持续时间对象
 * @returns {number} - 持续时间的毫秒数
 * @example
 * durationToMillis(moment.duration(1000))
 */
export function durationToMillis(durationObj) {
  return durationObj.asMilliseconds();  // 返回持续时间的毫秒数
}

/**
 * 获取星期几
 * @param {Moment} date - Moment 对象
 * @returns {number} - 星期几
 * @example
 * getWeek(moment())
 */
export function getWeek(date) {
  let week = moment.isMoment(date) ? date.day() : moment(date).day();
  return week === 0 ? 7 : week;
}

/**
 * 字符串转换为 Unix 时间戳
 * @param {string} str - 日期字符串
 * @returns {number} - Unix 时间戳
 * @example
 * str2Unix("2024-01-01 12:00:00")
 */
export function str2Unix(str) {
    return moment(str).unix();
}


/**
 * 判断两个日期是否是同一天
 * @param {string | Moment} one - 日期字符串或 Moment 对象
 * @param {string | Moment} two - 日期字符串或 Moment 对象
 * @returns {boolean} - 是否是同一天
 * @example
 * isSameDay(moment(), moment())
 */
export function isSameDay(one, two) {
    let oneMoment = moment(one);
    let twoMoment = moment(two);
    return oneMoment.isSame(twoMoment, "day");
  };
  
/**
 * 判断一个日期是否是今天
 * @param {string | Moment} one - 日期字符串或 Moment 对象
 * @returns {boolean} - 是否是今天
 * @example
 * isToday(moment())
 */
export function isToday(one) {
    return isSameDay(moment(), one);
  };
  
/**
 * 获取一个日期当天的开始时间
 * @param {string | Moment} time - 日期字符串或 Moment 对象
 * @returns {Moment} - 当天的开始时间
 * @example
 * getZeroMoment(moment())
 */
export function getZeroMoment(time) {
    return moment(time).startOf("day");
  };
  
/**
 * 判断一个日期是否是今天之前
 * @param {string | Moment} time - 日期字符串或 Moment 对象
 * @returns {boolean} - 是否是今天之前
 * @example
 * isTodayBefore(moment())
 */
export function isTodayBefore(time) {
    let zeroMoment = getZeroMoment(moment());
    return zeroMoment.isAfter(time);
  };
  
/**
 * 扩展一个日期的时间
 * @param {Moment} originMoment - 原始 Moment 对象
 * @param {Moment} targetMoment - 目标 Moment 对象
 * @returns {Moment} - 扩展后的 Moment 对象
 * @example
 * extendTime(moment(), moment())
 */
export function extendTime(originMoment, targetMoment) {
    originMoment = originMoment.clone();
    originMoment.hour(targetMoment.hour());
    originMoment.minute(targetMoment.minute());
    originMoment.second(targetMoment.second());
    return originMoment;
};