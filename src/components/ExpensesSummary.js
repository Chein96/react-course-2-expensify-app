import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpensesCount }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenseWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,00.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                </h1>
                <h3 className="page-header__subtitle">
                    {
                        hiddenExpensesCount !== 0 ? (
                            `${hiddenExpensesCount} hidden ${hiddenExpenseWord} with current filters.`
                        ) : (
                            `No hidden expenses.`
                        )
                    }
                </h3>
                
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ expenses, filters }) => {
    const visibleExpenses = getVisibleExpenses(expenses, filters);
    const hiddenExpensesCount = expenses.length - visibleExpenses.length;
    return { 
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
        hiddenExpensesCount
    }
};

export default connect(mapStateToProps)(ExpensesSummary);