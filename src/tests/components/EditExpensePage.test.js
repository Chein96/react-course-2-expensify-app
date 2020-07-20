import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpense;
beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        history={history}
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        expense={expenses[1]}
    />);
});

test('Should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should handle changeVisibility on click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('visibility')).toBeTruthy();
});

test('Should handle startRemoveExpense on confirmation modal', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('Should hide confirmation modal', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('visibility')).toBeFalsy();
});

test('Should hide confirmation modal on user request', () => {
    wrapper.find('button').at(0).simulate('click');
    wrapper.find(Modal).prop('onRequestClose')();
    expect(wrapper.state('visibility')).toBeFalsy();
});