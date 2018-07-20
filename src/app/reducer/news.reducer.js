import _ from 'lodash';
import {newsFeed} from '../../constants/action'
const initialState = {
detail: {},
error: null
};

const newsReducer = (state = initialState, action) => {
    let duplicateState = _.cloneDeep(state);
switch (action.type) {
    case newsFeed.newsFeedGrid.Succcess:
        duplicateState.detail = action.data;
        duplicateState.error = null;
        break;
    case newsFeed.newsFeedGrid.Failure:
        duplicateState.detail = {};
        duplicateState.error = action.error;
        break;
    }
    return duplicateState;
};
export default newsReducer;
