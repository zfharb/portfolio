import * as actionType from './actionType';


export const ClickOpenSiteBars  = (isOpenSiteBarsClicked, isSiteClosed, isFirstTimeToSite) => ({

      type: actionType.CLICK_OPEN_SITE_BARS,
      payload: {isOpenSiteBarsClicked, isSiteClosed, isFirstTimeToSite }
        
});


