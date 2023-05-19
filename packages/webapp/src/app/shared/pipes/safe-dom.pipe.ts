import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeScript, SafeStyle } from '@angular/platform-browser';

type safeHtmlType = 'html' | 'script' | 'style';

@Pipe({
  name: 'safeDom',
  standalone: true,
})
export class SafeDomPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value: string, type: safeHtmlType): SafeHtml | SafeScript | SafeStyle {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      default:
        throw Error('Error safe html type!');
    }
  }
}
