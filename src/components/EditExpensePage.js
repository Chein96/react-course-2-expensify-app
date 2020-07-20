import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        visibility: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.setState(()=>({visibility:false}));
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    changeVisibility = () => this.setState((prevState)=>({visibility: !prevState.visibility}));

    render(){
        const { visibility } = this.state;

        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.changeVisibility}>Remove Expense</button>
                </div>
                <Modal 
                    isOpen={visibility}
                    onRequestClose={this.changeVisibility}
                    contentLabel="Expense removal confirmation"
                    closeTimeoutMS={200}
                    className="modal"
                >
                    <h3 className="modal__title">
                        <span>"{this.props.expense.description}"</span>
                        will be removed.
                    </h3>
                    <div className="modal__actions">
                        <button className="button" onClick={this.onRemove}>Continue</button>
                        <button className="button button--secondary" onClick={this.changeVisibility}>Cancel</button>
                    </div>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({id}) => dispatch(startRemoveExpense({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);