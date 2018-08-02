const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Wagner';
        var text = 'Testing case';
        
        var message = generateMessage(from, text)
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Wag';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?=1,1';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            url
        });
        expect(message.url).toEqual(url);
    });
});