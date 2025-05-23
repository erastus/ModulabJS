export class HTMLUtil {
  constructor() {}

  private static readonly allowedHTMLTagsRegularExpression: string = 
    "<(\\/?)(?!(html|span|br|em|p|u|ul|li|ol|font|br\\s\\/|strong))\\w+?.+?>";

  private static readonly htmlTagsRegularExpression: string = 
    "(?i)<[^>]*>";

  public static removeHTMLTags(value: string | null): string {
    let res = value ?? "";
    if (value && value.includes("<html>")) {
      res = this.applyRegularExpression(value, this.htmlTagsRegularExpression);
    }
    return this.replaceHTMLEntities(res, true);
  }

  public static applyRegularExpression(value: string | null, regularExpression: string): string {
    if (value) {
      const pattern = new RegExp(regularExpression, "gi");
      return value.replace(pattern, "");
    }
    return value ?? "";
  }

  public static replaceHTMLEntities(str: string, reverse: boolean): string {
    if (str == null) return "";
    return reverse
      ? str
          .replace(/&amp;/g, "&")
          .replace(/&quot;/g, "\"")
          .replace(/&gt;/g, ">")
          .replace(/&lt;/g, "<")
      : str
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/>/g, "&gt;")
          .replace(/</g, "&lt;");
  }

  public static getAllowedHTMLTagsRegularExpression(): string {
    return this.allowedHTMLTagsRegularExpression;
  }

  public static getHTMLTagsRegularExpression(): string {
    return this.htmlTagsRegularExpression;
  }
}
