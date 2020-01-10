import { createBrowserHistory, createMemoryHistory } from 'history'


export default function configureHistory (url = '/') {
  return typeof window.document === 'undefined'
    ? createMemoryHistory({ initialEntries: [url]})
    : createBrowserHistory()
}


