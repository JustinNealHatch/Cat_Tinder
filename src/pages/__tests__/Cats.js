import React from 'react'
import ReactDOM from 'react-dom'
import Cats from '../Cats'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const cats = [
    {
      id: 1,
      name: 'Morris',
      age: 4,
      enjoys: "Long walks on the beach."
    },
    {
      id: 2,
      name: 'Paws',
      age: 4,
      enjoys: "Snuggling by the fire."
    },
    {
      id: 3,
      name: 'Mr. Meowsalot',
      age: 12,
      enjoys: "Being in charge."
    }
  ]


it('Cats renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Cats cats={cats} />, div)
})

it('Renders ths cats', ()=>{
  const component = mount(<Cats cats={cats} />)
  const headings = component.find('h4> .cat-name')
  expect(headings.length).toBe(3)
})
