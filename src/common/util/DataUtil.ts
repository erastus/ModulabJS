import { JavaString } from "../data/types/javaString";
import { CaracterEspecial } from "../constants/CaracterEspecial";
import { XMLUtil } from "./XMLUtil";

export class DataUtil {
  constructor() {}

  public static xMLValue(obj: any): string {
    if (obj === null || obj === undefined) {
      return CaracterEspecial.EMPTY;
    }

    if (typeof obj === 'string') {
      return DataUtil.xMLValueFromString(obj);
    }

    if (typeof obj === 'boolean') {
      return DataUtil.xMLValueFromBoolean(obj);
    }

    if (typeof obj === 'number') {
      return obj.toString();
    }

    if (obj instanceof Date) {
      return DataUtil.xMLValueFromDate(obj);
    }

    if (obj instanceof Uint8Array || obj instanceof ArrayBuffer) {
      const bytes = obj instanceof ArrayBuffer ? new Uint8Array(obj) : obj;
      return `<![CDATA[${DataUtil.base64Encode(bytes)}]]>`;
    }

    if (typeof obj.toXML === 'function') {
      return DataUtil.xMLValueFromString(obj.toXML());
    }

    if (obj instanceof JavaString) {
      return DataUtil.xMLValueFromString(obj.toString());
    }

    return CaracterEspecial.EMPTY;
  }

  public static xMLValueFromBoolean(b: boolean): string {
    return b ? 'Y' : 'N';
  }

  public static xMLValueFromString(str: string): string {
    if (!str) return CaracterEspecial.EMPTY;
    return XMLUtil.replaceXMLEntities(str);
  }

  public static xMLValueWithoutReplaceEntities(str: string): string {
    return str ?? CaracterEspecial.EMPTY;
  }

  public static xMLValueReplacingEntities(str: string): string {
    return str ? XMLUtil.replaceXMLEntities(str) : CaracterEspecial.EMPTY;
  }

  public static xMLValueFromDate(date: Date): string {
    // Retornar en formato GMT ISO
    return date.toISOString().replace(/\.\d{3}Z$/, 'Z'); // Simplificado como ISO8601 sin milisegundos
  }

  public static xMLValueWithEndOfDay(date: Date, isEndOfDay: boolean): string {
    const newDate = new Date(date);
    if (isEndOfDay) {
      newDate.setHours(23, 59, 59, 999);
    }
    return DataUtil.xMLValueFromDate(newDate);
  }

  public static base64Encode(bytes: Uint8Array): string {
    let binary = '';
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}
