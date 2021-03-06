import { shallow } from 'enzyme';
import App from './App';
describe('<App />', () => {
    it('render <App /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App')).toHaveLength(1);
    });
});
