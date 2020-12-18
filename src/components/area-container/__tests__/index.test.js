import { shallow } from 'enzyme';
import AreaContainer from '../index';

describe('<AreaContainer />', () => {
    it('renders three <AreaContainer /> component', () => {
        const wrapper = shallow(<AreaContainer />);
        expect(wrapper.find('.area-container')).toHaveLength(1);
    });
});
