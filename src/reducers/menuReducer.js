import * as actionType from '../actions/actionType';

var siteStatus= {isOpenSiteBarsClicked: false , isFirstTimeToSite: true};

const MenuReducer = (state =siteStatus, action) => {
    	console.log(action);

  switch (action.type) {

    case actionType.CLICK_OPEN_SITE_BARS:
      console.log(action.payload);

    	console.log("I'm in nav bar reducer");
    	      // console.log(state);
        console.log(Object.assign({}, state, {isOpenSiteBarsClicked: !action.payload.isOpenSiteBarsClicked, 
                                         isFirstTimeToSite: false}));
      	return Object.assign({}, state, {isOpenSiteBarsClicked: !action.payload.isOpenSiteBarsClicked, 
                                         isFirstTimeToSite: false});
      	

    default:
          console.log(state);

        	console.log("I made it in default reducer");

    	return state;
  }


}

export default MenuReducer;
