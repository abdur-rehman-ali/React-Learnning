import "./App.css";
import AllExpenses from './components/AllExpenses'


function App() {
  let expenses = [
    {
      id: "1",
      title: "Books",
      price: 300,
      date: new Date(2021, 5, 12),
    },
    {
      id: "2",
      title: "Stationery",
      price: 200,
      date: new Date(2021, 7, 27),
    },
    {
      id: "3",
      title: "Cricket",
      price: 400,
      date: new Date(2021, 7, 25),
    },
    {
      id: "4",
      title: "Gym",
      price: 800,
      date: new Date(2021, 2, 12),
    },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AllExpenses item = {expenses} />
    </div>
  );
}

export default App;
