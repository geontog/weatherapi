import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer, epic } from './models/weather';
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  );
  // const store = createStore(
  //   reducer,
  //   applyMiddleware(epicMiddleware),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //  );

  epicMiddleware.run(epic);

  return store;
}