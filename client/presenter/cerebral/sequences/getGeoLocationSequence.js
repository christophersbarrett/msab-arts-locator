import { getGeoAction } from '../actions/getGeoAction';
import { setGeoAction } from '../actions/setGeoAction';
import { setCityAction } from '../actions/setCityAction';
import { getReverseCityAction } from '../actions/getReverseCityAction';
import { searchByCityAction } from '../actions/searchByCityAction';

export const getGeoLocationSequence = [
  getGeoAction,
  setGeoAction,
  getReverseCityAction,
  setCityAction,
  searchByCityAction,
];
