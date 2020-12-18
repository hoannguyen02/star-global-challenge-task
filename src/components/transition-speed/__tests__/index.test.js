import { shallow } from 'enzyme';
import TransitionSpeed from '../index';

describe('<TransitionSpeed />', () => {
    it('render <TransitionSpeed /> component', () => {
        const wrapper = shallow(<TransitionSpeed />);
        expect(wrapper.find('.transition-speed')).toHaveLength(1);
    });
});
