import { shallow } from 'enzyme';
import SquareBox from '../index';

describe('<SquareBox />', () => {
    it('renders three <SquareBox /> component', () => {
        const wrapper = shallow(<SquareBox />);
        expect(wrapper.find('.square-box')).toHaveLength(1);
    });
});
