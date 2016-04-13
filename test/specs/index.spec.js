import Vue from 'vue'
import ElCompo from './../../src/output.js'

describe('el-radio', () => {
  it('install', done => {
    expect(ElCompo).to.respondTo('install')
    done()
  })
})