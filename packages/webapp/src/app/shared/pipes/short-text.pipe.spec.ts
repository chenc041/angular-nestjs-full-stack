import { ShortTextPipe } from './short-text.pipe';

describe('ShortTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return to 8 characters', function () {
    const pipe = new ShortTextPipe();
    expect(pipe.transform('1234567890').length).toEqual(8);
  });
});
