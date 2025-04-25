export function extend(target, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

export function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, '');
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}

export function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

export function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === '[object Undefined]';
}

export function isNull(obj) {
  return Object.prototype.toString.call(obj) === '[object Null]';
}

export function isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}

export function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

export function isError(obj) {
  return Object.prototype.toString.call(obj) === '[object Error]';
}

export function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
}

export function isSymbol(obj) {
  return Object.prototype.toString.call(obj) === '[object Symbol]';
}

export function isPromise(obj) {
  return Object.prototype.toString.call(obj) === '[object Promise]';
}

export function isSet(obj) {
  return Object.prototype.toString.call(obj) === '[object Set]';
}

export function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Map]';
}

export function isWeakSet(obj) {
  return Object.prototype.toString.call(obj) === '[object WeakSet]';
}

export function isWeakMap(obj) {
  return Object.prototype.toString.call(obj) === '[object WeakMap]';
}

export function isArrayBuffer(obj) {
  return Object.prototype.toString.call(obj) === '[object ArrayBuffer]';
}

export function isDataView(obj) {
  return Object.prototype.toString.call(obj) === '[object DataView]';
}

export function isFloat32Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Float32Array]';
}

export function isFloat64Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Float64Array]';
}

export function isInt8Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Int8Array]';
}

export function isInt16Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Int16Array]';
}

export function isInt32Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Int32Array]';
}

export function isUint8Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
}

export function isUint16Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint16Array]';
}

export function isUint32Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint32Array]';
}

export function isUint8ClampedArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint8ClampedArray]';
}

export function isGeneratorFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object GeneratorFunction]';
}

export function isGenerator(obj) {
  return Object.prototype.toString.call(obj) === '[object Generator]';
}

export function isAsyncFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object AsyncFunction]';
}

export function isAsyncGeneratorFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object AsyncGeneratorFunction]';
}

export function isAsyncGenerator(obj) {
  return Object.prototype.toString.call(obj) === '[object AsyncGenerator]';
}

export function isProxy(obj) {
  return Object.prototype.toString.call(obj) === '[object Proxy]';
}

export function isReflect(obj) {
  return Object.prototype.toString.call(obj) === '[object Reflect]';
}

export function isFinalizationRegistry(obj) {
  return Object.prototype.toString.call(obj) === '[object FinalizationRegistry]';
}

export function isWeakRef(obj) {
  return Object.prototype.toString.call(obj) === '[object WeakRef]';
}

export function isSharedArrayBuffer(obj) {
  return Object.prototype.toString.call(obj) === '[object SharedArrayBuffer]';
}

export function isAtomics(obj) {
  return Object.prototype.toString.call(obj) === '[object Atomics]';
}

export function isBigInt(obj) {
  return Object.prototype.toString.call(obj) === '[object BigInt]';
}

export function isBigInt64Array(obj) {
  return Object.prototype.toString.call(obj) === '[object BigInt64Array]';
}

export function isBigUint64Array(obj) {
  return Object.prototype.toString.call(obj) === '[object BigUint64Array]';
} 