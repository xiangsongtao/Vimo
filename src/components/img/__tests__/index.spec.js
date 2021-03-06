/* eslint-disable no-undef,no-unused-expressions */

import { mount } from 'vue-test-utils'
import Img from '../index'

let wrapper = null
let options = {
  propsData: {
    src: 'http://xx.xx.com/static/img/xx.png',
    alt: 'demo-img',
    width: 100,
    height: 200
  }
}

describe('Img', function () {
  it('@base: renders the correct markup', function () {
    wrapper = mount(Img, options)
    const result = `<div src="http://xx.xx.com/static/img/xx.png" class="ion-img img img-unloaded"><img alt="demo-img" style="display: none;" name="fade"></div>`
    expect(wrapper.html()).toEqual(result)
  })

  it('@base: component must have a name', function () {
    wrapper = mount(Img, options)
    expect(wrapper.name()).toEqual('Img')
  })

  it('@base: have the right className', function () {
    wrapper = mount(Img, options)
    expect(wrapper.hasClass('ion-img')).toBeTruthy()
  })
})
