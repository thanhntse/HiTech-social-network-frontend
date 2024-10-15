// @ts-nocheck

/********************************************** *
 * list of all functions include:
 * isSomething => check if is something
 * parseSomething => Parse something ...
 * getSomething => Get Something ...
 ********************************************** */

import helper_is from './is';
import helper_get from './get';

import dateandtime from 'date-and-time';
// import __ from '../languages/index';
import mergeImages from 'merge-images';

interface exportCanvasAsImageProps {
  canvas: any;
  selectedImg: string;
  detailPosition: {
    xPosition: number;
    yPosition: number;
  };
}

export const exportCanvasAsImage = async ({
  canvas,
  selectedImg,
  detailPosition
}: exportCanvasAsImageProps) => {
  if (canvas) {
    const dataUrl = canvas.toDataURL({
      format: 'png',
      quality: 1.0,
      multiplier: 1
    });

    const imgCanvas = new Image();
    imgCanvas.src = dataUrl;

    const ImgBackground = new Image();
    ImgBackground.src = selectedImg;

    console.log('ImgBackground', ImgBackground);
    console.log('imgCanvas', imgCanvas);

    ImgBackground.onload = async () => {
      const maxWidth = 1000;
      const maxHeight = 1000;
      let width = ImgBackground.width;
      let height = ImgBackground.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height *= maxWidth / width));
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width *= maxHeight / height));
          height = maxHeight;
        }
      }
      const mergedImage = await mergeImages(
        [
          {
            src: ImgBackground.src,
            x: 0,
            y: 0,
            width,
            height
          },
          {
            src: imgCanvas.src,
            x: detailPosition.xPosition,
            y: detailPosition.yPosition
          }
        ],
        {
          width: 700,
          height: 700
        }
      );
      console.log(mergedImage);

      const a = document.createElement('a');
      a.href = mergedImage;
      a.download = 'canvas-image.jpg';
      a.click();
    };
  }
};

/**
 * Helpers
 */
class helpers {
  convertToDate(isoString) {
    const date = new Date(isoString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  /**
   * Caculate percent,
   * @input target: number, got: number
   * @return number * 100
   */
  caculatePercent(target: number | string, got: number | string): number {
    target = Number(target);
    got = Number(got);
    let r = ((got / target) * 100).toFixed(1);
    let rr = parseFloat(r);
    if (rr > 100) rr = 100;
    return rr;
  }

  // constructor() {}
  /**
   * Filter object, null or undefined is ignore
   * @param _self
   * @returns
   */
  filterNullObject(_self: any) {
    var result: any = {};
    for (var key in _self) {
      /**
       * Địt mẹ Javascript, cái địt tổ nó, đổi sang
       * _self[key] !== null nó lại không được, phải
       * _self[key] === null cơ! null === null
       */
      if (_self[key] === null || _self[key] === undefined) continue;
      result[key] = _self[key];
    }
    return result;
  }

  /**
   * Pick variable from Object, like lodash/pick
   * @Param _object: object
   * @Param _PickArray: array to pick from Object
   * @McJamBi  from Jamviet.com
   * @DateTime 2021-10-06T02:22:20+0700
   */
  pick(_object: any, _PickArray: string[]) {
    let ALLOW_VARIABLE: any = {};
    for (let query_string in _object) {
      if (_PickArray.indexOf(query_string) > -1) {
        ALLOW_VARIABLE = {
          ...ALLOW_VARIABLE,
          ...{ [query_string]: _object[query_string] }
        };
      }
    }
    return ALLOW_VARIABLE;
  }

  /**
   * Removes fields with an 'id' field that equals ''.
   * This function was created to prevent entities to be sent to
   * the server with an empty id and thus resulting in a 500.
   *
   * @param entity Object to clean.
   */
  cleanEntity<T>(entity: T): T {
    const keysToKeep = Object.keys(entity).filter(
      (k) =>
        !(entity[k] instanceof Object) ||
        (entity[k]['id'] !== '' && entity[k]['id'] !== -1)
    );
    return this.pick(entity, keysToKeep);
  }

  /**
   * Return filter to save to history ...
   * @param stringQuery Object to URL query function
   * @returns
   */
  buildEndUrl(stringQuery: any) {
    if (stringQuery === void 0) return '?query=';
    const params = [];
    for (let key in stringQuery) {
      let nameofquery = String(key || '').trim();
      let valueofquery = String(stringQuery[key] || '').trim();
      if (key !== '') params.push({ key: nameofquery, value: valueofquery });
    }
    if (params.length > 0) {
      return '?' + params.map(({ key, value }) => `${key}=${value}`).join('&');
    }

    return '?query=';
  }

  /**
   * Revert buildEndUrl, parse URL to Object
   * Duplicate value will be overwrite, last value will taken
   * @param stringQuery URL SEARCH STRING
   */
  ExtractUrl(stringQuery: any): any {
    let searchParams = new URLSearchParams(stringQuery);
    let final_object = {};
    for (const [key, value] of searchParams.entries()) {
      final_object = {
        ...final_object,
        ...{
          [key]: value
        }
      };
    }
    return final_object;

    // let URLWithoutQuestionMark = String(stringQuery).substr(1); // remove ? at beginer of string
    // let URLToObject = String(URLWithoutQuestionMark).split('&'); // array
    // let FN = URLToObject.map( (r) => {
    //     let a = String(r).split('=');
    //     let y = { [a[0]] : a[1] };
    //     return y;
    // });

    // if ( FN ) {
    //   let final_object = {};
    //   for ( var a of FN) {
    //     final_object = {...final_object, ...a};
    //   }
    //   return final_object;
    // }
    // return {};
  }

  /**
   * Caculate percentage
   * @param partialValue Number
   * @param totalValue Number
   * @returns
   */
  percentage(partialValue: number, totalValue: number) {
    partialValue = Number(partialValue);
    totalValue = Number(totalValue);
    if (totalValue === 0) return 0;
    return ((100 * partialValue) / totalValue).toFixed(2);
  }

  // lodash debounce ...
  debounce(callback: any, wait: number) {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  }

  /**
   * Filter empty element in an array, remove empty string, null and undefined
   * @param _array array
   */
  // filterEmptyArray<T>(_array: T[]): T[] | [] {
  //     let __array = _array.filter((el) => {
  //         return el !== '' && el !== 'undefined' && el !== undefined && el !== null;
  //     });
  //     return __array;
  // }

  /**
   * Filter empty element in an object, remove empty string, null and undefined
   * @param object object
   */
  filterEmptyObject<T>(_object: T): T {
    let final_after_filter: T;
    for (let property in _object) {
      let val = _object[property];
      if (val === '' || val === undefined || val === null) continue;

      final_after_filter = {
        ...final_after_filter,
        ...{
          [property]: val
        }
      };
    }
    return final_after_filter;
  }

  /**
   * Trim middle string, eg: Hello xin chào...nhé bạn!
   * @param s String
   */
  trimMiddleString(
    input_string: string,
    front?: number,
    back?: number
  ): string {
    if (input_string === void 0) return '';
    if (!input_string) return '';
    if (front === void 0) front = 10;
    if (back === void 0) back = 10;
    if (input_string.length < 21) return input_string;

    let start = String(input_string || ' ').substring(0, front);
    let end = String(input_string || ' ').substring(input_string.length - back);

    return `${start} ...${end}`;
  }

  /**
   * Trim content string, eg: Hello xin chào...
   * @param s String
   */
  trimContentString(s: string, _length?: number): string {
    if (s === void 0) return '';
    if (!s) return '';
    if (_length === void 0) _length = 20;
    if (s.length < 21) return s;

    let start = String(s || ' ').substring(0, _length);

    return `${start}...`;
  }

  /**
   * Convert Bytes to KB, MB, GB
   * @param bytes
   * @param decimals
   * @returns
   */
  bytesToSize(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = Math.floor(Math.log(bytes) / Math.log(k));
    if (i < 0) i = 0;
    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i] ||
      'Bytes'
    );
  }

  /**
   * Convert DateTime bigInt to number of days remain
   * Tính số ngày đã trôi qua, dương là số ngày trôi qua, số âm là chưa tới ngày
   * @param thatday bigint
   * @returns
   */
  subtractDate = (thatday: any, prefix?: string) => {
    if (!thatday || thatday < 1) return '';
    const today = dateandtime.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    const tday = dateandtime.subtract(
      new Date(today),
      new Date(Number(thatday))
    );
    return Math.ceil(tday.toDays()) + (prefix ? ' ' + prefix : '');
  };

  /**
   * Show the date / or hour or minutes passed
   * @param thatday Date object
   * @param prefix
   * @returns
   */
  // subtractTimeHistory = (timestamp: Number | String, default_value?: string): string => {
  //     if (!timestamp) return default_value;

  //     const today = dateandtime.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
  //     const tday = dateandtime.subtract(new Date(today), new Date(Number(timestamp)));

  //     if (tday.toSeconds() < 59) {
  //         return Math.ceil(tday.toSeconds()) + ' ' + __('second_ago');
  //     }
  //     if (tday.toMinutes() < 59) {
  //         return Math.ceil(tday.toMinutes()) + ' ' + __('minute_ago');
  //     }

  //     if (tday.toHours() < 24) {
  //         return Math.ceil(tday.toHours()) + ' ' + __('hour_ago');
  //     }

  //     if (tday.toDays() < 30) {
  //         return Math.ceil(tday.toDays()) + ' ' + __('day_ago');
  //     }

  //     return dateandtime.format(new Date(Number(timestamp)), 'YYYY/MM/DD HH:mm');
  // }

  /**
   * Convert comma to array
   * @param __str String with comma, safe function
   * @return any[] or empty []
   */
  // commaToArray(__str: string): any[] {
  //     try {
  //         return String(__str || " ").split(',').map(el => el.trim());
  //     } catch (_e) {
  //         return [];
  //     }
  // }

  /**
   * Convert array to comma
   * @param __str array
   * @return string with comma
   */
  // ArrayToComma(__str: any[]): string {
  //     try {
  //         return __str.join(',');
  //     } catch (_e) {
  //         return '';
  //     }
  // }

  /**
   * Format for money or you need something like easy to read long number
   * @param x
   * @returns
   */
  formatNumberWithCommas(n: string | number): string {
    n = this.parseNumeric(n);
    let isNegative = false;

    if (n < 0) {
      isNegative = true;
      n = Math.abs(n);
    }

    n = n.toString();
    var pattern = /(\d+)(\d{3})/;
    while (pattern.test(n)) {
      n = n.replace(pattern, '$1,$2');
    }

    return isNegative ? '-' + n : n;
  }

  /**
   * Cookie set
   */

  cookie_set(name: string, value: string, expire_day?: number): void {
    let expires = '';
    if (typeof expire_day !== 'undefined') {
      const d = new Date();
      d.setTime(d.getTime() + expire_day * 24 * 60 * 60 * 1000);
      expires = ';expires=' + d.toUTCString();
    }
    document.cookie = `${name}=${value};SameSite=Lax;path=/` + expires;
  }
  /**
   * Cookie get value
   * @param name
   * @returns
   */
  cookie_get(name: string): string | undefined {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length >= 2) return parts.pop().split(';').shift();
    return;
  }

  /**
   * Cookie delete
   * @param name String
   */
  cookie_delete(name: string): void {
    document.cookie = `${name}=;SameSite=Lax;path=/;Max-Age=-99999999;`;
  }

  /**
   * Colon to old sort style
   * @use in simple Filter ... for advance filter
   */
  // colonToOldSort(__str: string) {
  //     try {
  //         let a = this.commaToArray(__str);
  //         let s = String(a.pop() || " ").split(':').map(el => el.trim());
  //         return s.join(', ');
  //     } catch (_e) {
  //         return '';
  //     }
  // }

  // reserve back to old version...
  /**
   * Use for simple Filter ...
   * @param __str
   * @returns
   */
  // oldSortToColon(__str: string) {
  //     try {
  //         let a = this.commaToArray(__str);
  //         return a.join(':');
  //     } catch (e) {
  //         return '';
  //     }
  // }
}

interface helpers extends helper_is, helper_get {}
const __helpers = new helpers();
export default __helpers;

/*******
 * Everything after here is for webpack!
 */

// copy the methods
Object.assign(helpers.prototype, new helper_is());
Object.assign(helpers.prototype, new helper_get());

/**
 * It is must be here because of webpack can not run without applyMixins
 * @param derivedCtor
 * @param constructors
 */

// the helper function
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

applyMixins(helpers, [helper_is, helper_get]);
