/* eslint-disable no-extra-boolean-cast */
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, delCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: nanoid(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(delCustomerAction(customer));
  };

  return (
    <div className="app">
      <div style={{ fontSize: '40px' }}>Balance: {cash}</div>

      <div>
        <button onClick={() => addCash(+prompt('Add Cash', '20'))}>
          Top Up
        </button>
        <button onClick={() => getCash(+prompt('Withdraw Cash', '20'))}>
          Withdraw
        </button>
      </div>

      <div>
        <button onClick={() => addCustomer(prompt('Add Client'))}>
          Add Client
        </button>
        <button onClick={() => getCash(+prompt('Withdraw Cash', '20'))}>
          Del Client
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(fetchCustomers())}>DB Clients</button>
      </div>
      <div className="clients">
        {!!customers.length ? (
          <div>
            {customers.map((customer) => (
              <div key={customer.id} onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>No Clients</div>
        )}
      </div>
    </div>
  );
}

export default App;
