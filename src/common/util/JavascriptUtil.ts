import { javaString } from '@data/types/javaString'

export class JavascriptUtil {

  public showMessage(message: String | javaString | Boolean): void {
    console.log('\x1b[34m', message.toString());
  }
}
