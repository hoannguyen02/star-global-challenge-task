import { shallow } from 'enzyme';
import WelcomeTitle from '../index';

describe('<WelcomeTitle />', () => {
    it('render <WelcomeTitle /> component', () => {
        const wrapper = shallow(<WelcomeTitle />);
        expect(wrapper.find('.welcome-title')).toHaveLength(1);
    });
});
