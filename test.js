const {use, expect} = require('chai')

// Add chai-roughly-v2 from local source
use(require('./index'))

describe('expect(...).to.roughly.deep.equal(...)', function () {
    it('passes for empty objects', function () {
        expect({}).to.roughly.deep.equal({})
    })

    it('passes for roughly similar values', function () {
        expect({value: 12345}).to.roughly(0.01).deep.equal({value: 12345.009})
    })

    it('fails for different values', function () {
        expect(function () {
            expect({value: 12345}).to.roughly.deep.equal({value: 12345.1})
        }).to.throw()
    })

    it('passes for multiple roughly similar values', function () {
        expect({
            value: 12345,
            other: 0.1234
        }).to.roughly.deep.equal({
            value: 12345.0000009,
            other: 0.1234009
        })
    })

    it('passes for roughly similar nested values', function () {
        expect({
            sub: {
                value: 42
            }
        }).to.roughly.deep.equal({
            sub: {
                value: 41.999999
            }
        })
    })
})
