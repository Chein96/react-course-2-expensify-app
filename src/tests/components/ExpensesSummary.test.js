import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render ExpensesSummary with 1 expense correctly', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={1}
            expensesTotal={235}
            hiddenExpensesCount={0}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary with multiple expenses correctly', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={23}
            expensesTotal={23512340987}
            hiddenExpensesCount={3}
        />
    );
    expect(wrapper).toMatchSnapshot();
});