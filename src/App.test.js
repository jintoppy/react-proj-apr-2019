import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('should render properly', () => {
        const component = shallow(<App />);
        const buttons = component.find('button');
        expect(buttons).toHaveLength(2);
        expect(component.find('MyList')).toHaveLength(1);
    });

    it('should set prodId as 2 on second button click', () => {
        const component = shallow(<App />);
        expect(component.state().prodId).toEqual('1');
        component.find('#my-btn-2').simulate('click');
        expect(component.state().prodId).toEqual('2');
    });

});