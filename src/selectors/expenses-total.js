const getExpensesTotal = (expenses) => {
    return expenses
        .map(({ amount }) => amount)
        .reduce((acc, value) => acc + value, 0);
};

export default getExpensesTotal;