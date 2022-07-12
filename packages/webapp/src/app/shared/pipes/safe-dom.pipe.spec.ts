import { SafeDomPipe } from './safe-dom.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafeDomPipe', () => {
  let pipe: SafeDomPipe;
  let sanitized: DomSanitizer;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DomSanitizer],
    });
    sanitized = TestBed.inject(DomSanitizer);
    pipe = new SafeDomPipe(sanitized);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
