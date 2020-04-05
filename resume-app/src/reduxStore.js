import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadTranslations, syncTranslationWithStore, i18nReducer, I18n } from 'react-redux-i18n';
import thunk from 'redux-thunk';

import { dictionary } from './i18n/dictionary'

export const reduxStore = () => {
  let store = createStore(
    combineReducers({
      i18n: i18nReducer
    }),
    applyMiddleware(thunk)
  );

  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(dictionary));

  const DEBUG_TRANSLATIONS = false;
  I18n.setHandleMissingTranslation(key => {
    if (DEBUG_TRANSLATIONS) {
      console.log(`Missing translation for "${key}"`);
    }
  });

  return store;
};
