import { Linking, Platform } from 'react-native';

import { linkTo } from 'app/utils/linking.ts';

describe('utils/linking', () => {
  afterEach(jest.clearAllMocks);

  describe('location', () => {
    it('should link maps for ios', () => {
      jest.spyOn(Platform, 'select').mockImplementationOnce(value => value.ios);
      const linkingOpenURlMock = jest.spyOn(Linking, 'openURL');

      const coords = '123,321';

      linkTo('location', coords)();

      expect(linkingOpenURlMock).toHaveBeenCalledTimes(1);
      expect(linkingOpenURlMock).toHaveBeenCalledWith(
        `https://maps.apple.com/?q=${coords}`,
      );
    });

    it('should link geo for android', () => {
      jest
        .spyOn(Platform, 'select')
        .mockImplementationOnce(value => value.android);
      const linkingOpenURlMock = jest.spyOn(Linking, 'openURL');

      const coords = '123,321';

      linkTo('location', coords)();

      expect(linkingOpenURlMock).toHaveBeenCalledTimes(1);
      expect(linkingOpenURlMock).toHaveBeenCalledWith(`geo:${coords}`);
    });

    it('should link geo for other platforms', () => {
      jest
        .spyOn(Platform, 'select')
        // @ts-expect-error default is not in type
        .mockImplementationOnce(value => value.default);
      const linkingOpenURlMock = jest.spyOn(Linking, 'openURL');

      const coords = '123,321';

      linkTo('location', coords)();

      expect(linkingOpenURlMock).toHaveBeenCalledTimes(1);
      expect(linkingOpenURlMock).toHaveBeenCalledWith(`geo:${coords}`);
    });
  });

  it('should link tel for phone numbers', () => {
    const linkingOpenURlMock = jest.spyOn(Linking, 'openURL');

    const number = '123456789';

    linkTo('phoneNumber', number)();

    expect(linkingOpenURlMock).toHaveBeenCalledTimes(1);
    expect(linkingOpenURlMock).toHaveBeenCalledWith(`tel:${number}`);
  });

  it('should link mailto for emails', () => {
    const linkingOpenURlMock = jest.spyOn(Linking, 'openURL');

    const email = 'test@test.com';

    linkTo('email', email)();

    expect(linkingOpenURlMock).toHaveBeenCalledTimes(1);
    expect(linkingOpenURlMock).toHaveBeenCalledWith(`mailto:${email}`);
  });
});
