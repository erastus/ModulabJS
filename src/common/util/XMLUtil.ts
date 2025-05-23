export class XMLUtil {
  constructor() {}

  static replaceHTMLEntities(str: string): string {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;');
  }

  static replaceHTMLEntitiesFromBuffer(sb: string): string {
    let result = '';
    for (let i = 0; i < sb.length; i++) {
      const c = sb.charAt(i);
      if (c < 'A' || c > 'z') {
        switch (c) {
          case '<':
            result += '&lt;';
            break;
          case '>':
            result += '&gt;';
            break;
          case '&':
            result += '&amp;';
            break;
          case '"':
            result += '&quot;';
            break;
          default:
            result += c;
        }
      } else {
        result += c;
      }
    }
    return result;
  }

  static replaceXMLEntitiesFromBuffer(sb: string): string {
    let result = '';
    for (let i = 0; i < sb.length; i++) {
      const c = sb.charAt(i);
      if (c < 'A' || c > 'z') {
        switch (c) {
          case '<':
            result += '&lt;';
            break;
          case '>':
            result += '&gt;';
            break;
          case '&':
            result += '&amp;';
            break;
          case '\'':
            result += '&apos;';
            break;
          case '"':
            result += '&quot;';
            break;
          case '\n':
            result += '&#10;';
            break;
          default:
            result += c;
        }
      } else {
        result += c;
      }
    }
    return result;
  }

  static replaceXMLEntities(str: string): string {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '&#10;');
  }

  static reverseXMLValue(str: string): string {
    if (!str) return '';
    return str
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#10;/g, '\n');
  }

  static getCDataNodeValue(pNode: Element, tagName: string): string | null {
    const nodeList = pNode.getElementsByTagName(tagName);
    if (nodeList.length > 0) {
      const child = nodeList[0].firstChild;
      if (child && child.nodeValue) {
        return child.nodeValue;
      }
    }
    return null;
  }
}
