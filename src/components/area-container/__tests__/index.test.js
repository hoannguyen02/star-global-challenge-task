import { shallow } from 'enzyme';
import AreaContainer from '../index';

describe('<AreaContainer />', () => {
    it('render <AreaContainer /> component', () => {
        const wrapper = shallow(<AreaContainer />);
        expect(wrapper.find('.area-container')).toHaveLength(1);
    });
});
