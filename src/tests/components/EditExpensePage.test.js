import React from 'react';
import { shallow } from 'enzyme';
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

test('Should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});