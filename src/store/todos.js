
export default {
  state: {
    idTodo: 4,
    todos: [{
      'userId': 1,
      'id': 1,
      'deleted': true,
      'price': 200,
      'count': 1,
      'image': 'https://picsum.photos/600/300/?image=0',
      'title': 'delectus aut autemsss',
      'description': 'delectus aut autemssssssss',
      'select': false,
      'tasks': [{title: 'quis ut nam facilis et officia qui', completed: false}, {title: 'fggfgf', completed: false}, {title: 'ffffffffffff', completed: false}]
    }, {
      'userId': 1,
      'id': 2,
      'deleted': true,
      'price': 2000,
      'count': 1,
      'description': 'delectus autasd autemsss',
      'image': 'https://picsum.photos/600/300/?image=1',
      'title': 'quis ut nam facilis et officia qui',
      'select': false
    }, {
      'userId': 1,
      'id': 3,
      'deleted': true,
      'price': 500,
      'count': 1,
      'description': 'delsssssssssasdectus aut autemsss',
      'image': 'https://picsum.photos/600/300/?image=2',
      'title': 'fugiat veniam minus',
      'select': false
    }]
  },
  mutations: {
    deleteTodo (state, payload) {
      state.todos.splice(payload, 1)
    },
    newTodo (state, payload) {
      state.idTodo++
      state.todos.splice(state.todos.length - 1, 0, payload)
    },
    changeCount (state, payload) {
      state.todos[payload.index].count = payload.count
    },
    select (state, payload) {
      state.todos[payload].select = !state.todos[payload].select
    }
  },
  actions: {
    deleteTodo ({commit}, payload) {
      commit('deleteTodo', payload)
    },
    newTodo ({commit}, payload) {
      commit('newTodo', payload)
    },
    changeCount ({commit}, payload) {
      commit('changeCount', payload)
    },
    select ({commit}, payload) {
      commit('select', payload)
    }
  },
  getters: {
    todos (state) {
      return state.todos
    },
    idTodo (state) {
      return state.idTodo
    }
  }
}
