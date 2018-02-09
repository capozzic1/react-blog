import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('babel-polyfill');

Enzyme.configure({ adapter: new Adapter() });
