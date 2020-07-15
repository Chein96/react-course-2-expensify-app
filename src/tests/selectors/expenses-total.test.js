import getExpensestotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
    const expensesTotal = getExpensesTotal([]);
    expect(expensesTotal).toEqual(0);
});

test('Should correctly add up a single expense', () => {
    const expensesTotal = getExpensesTotal([expenses[0]]);
    expect(expensesTotal).toEqual(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {
    const fixtureTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const expensesTotal = getExpensesTotal(expenses);
    expect(expensesTotal).toEqual(fixtureTotal);
});