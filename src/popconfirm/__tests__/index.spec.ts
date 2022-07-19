import { assert, describe, it } from 'vitest'

describe.skip('skipped suite', () => {
  it('test', () => {
    assert.equal(Math.sqrt(4), 3)
  })
})
