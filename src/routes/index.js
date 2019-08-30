import timeLine from '../pages/timeLine'
import newEmployee from '../pages/newEmployee'

export const createRoutes = (store) => {
  return ({
    path: '/',
    component: Layout(store),
    indexRoute: DomList(store),
    childRoutes: [
        newEmployee(store),
        timeLine(store),
    ]
  })
}

export default createRoutes