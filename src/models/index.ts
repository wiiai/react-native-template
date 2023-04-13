/*
 * @Author: GaoXiong
 * @LastEditors: GaoXiong
 * @Date: 2023-01-04 18:54:11
 * @LastEditTime: 2023-04-13 18:55:31
 * @FilePath: /react-native-template/src/models/index.ts
 * @Description: 
 */
import {makeObservable, observable, action} from 'mobx';
import {computed} from 'mobx';
import React, { createContext } from 'react';
import { UserStore } from "./account";
import { ContactStore } from './contact';

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

  constructor(todos: Todo[]) {
    makeObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
      addItem: action,
      removeItem: action,
    });
    this.todos = todos;
  }

  addItem() {
    this.todos.push(new Todo(new Date().toString().substring(0, 24)));
  }

  removeItem(index: number) {
    this.todos.splice(index, 1);
  }
}

export class RootStore {
  userStore: UserStore;
  contactStore: ContactStore;
  todos: TodoList;

  constructor () {
    this.userStore = new UserStore(this);
    this.contactStore = new ContactStore(this);

    this.todos = new TodoList([]);
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext<{
  userStore: UserStore;
  contactStore: ContactStore;
  todos: TodoList;
}>(rootStore);

export function useStore() {
  return React.useContext(StoreContext)
}