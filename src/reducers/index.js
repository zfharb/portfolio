import { combineReducers } from 'redux';
import MenuReducer from './menuReducer';


const PortfolioApp = combineReducers({
  siteStatus: MenuReducer
})

export default PortfolioApp
