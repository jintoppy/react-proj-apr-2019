import React from 'react';
import { shallow } from 'enzyme';
import MyList from './MyList';

describe('<MyList />', () => {
    it('should render properly', () => {
        const props = {
            listName: '1'
        };
        const component = shallow(<MyList {...props} />);
        const headerComp = component.find('h3');
        expect(headerComp.text()).toEqual('List name is 1');
    });
    it('should change the header text on listName change', () => {
        const props = {
            listName: '1'
        };
        const component = shallow(<MyList {...props} />);
        component.setProps({
            listName: '2'
        });
        const headerComp = component.find('h3');
        expect(headerComp.text()).toEqual('List name is 2');
    });
});