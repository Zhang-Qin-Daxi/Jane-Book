import { fromJS } from 'immutable';
import * as actionType from './actionType'

const defaultState = fromJS({
  articleList: [],
  recommendList:[],
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.CHANGE_HOME_DATA:
      return state.merge({
      articleList:fromJS(action.articleList),
      recommendList:fromJS(action.recommendList)
    })
    default: 
      return state;
  }
}