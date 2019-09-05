import timeLine from '../pages/timeLine'
import newEmployee from '../pages/newEmployee'
import Layout from '../containers/layout/index'
const timeLineRouter = {
  path:'timeLine',
  component: timeLine
}
const newEmployeeRouter = {
  path:'newEmployee',
  component: newEmployee
}
const myRouter = {
  path:'my',
  getComponent(nextState,cb) {
      cb(null, My)
  }
}
export const createRoutes = (store) => {
  return ({
    path: '/',
    component: Layout(store),
    indexRoute: timeLine(store),
    childRoutes: [
        newEmployee(store),
        timeLine(store),
    ]
  })
}

export default createRoutes