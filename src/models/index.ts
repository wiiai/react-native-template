import {makeObservable, observable, action} from 'mobx';
import {computed} from 'mobx';
import {createContext, useContext} from "react"
import React from 'react';

export const StoreContext = createContext<TodoList|null>(null);

class Todo {
  id = Math.random();
  title = '';
  finished = false;

  constructor(title: string) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos: Todo[] = [];

  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  constructor(todos) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addItem: action,
      removeItem: action
    });
    this.todos = todos;
  }

  addItem () {
    this.todos.push(new Todo(new Date().toString().substring(0, 24)))
  }

  removeItem(index: number) {
    this.todos.splice(index, 1)
  }
}

export const rootStore = new TodoList([
  new Todo('Get Coffee'),
  new Todo('Write simpler code'),
]);

export const useStore = () => {
  return React.useContext(StoreContext)
}