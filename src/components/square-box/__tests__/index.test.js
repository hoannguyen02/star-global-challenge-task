import { shallow } from 'enzyme';
import SquareBox from '../index';

describe('<SquareBox />', () => {
    it('render <SquareBox /> component', () => {
        const wrapper = shallow(<SquareBox />);
        expect(wrapper.find('.square-box')).toHaveLength(1);
    });
});
