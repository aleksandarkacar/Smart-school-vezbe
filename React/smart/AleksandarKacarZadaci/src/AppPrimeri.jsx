// 31.03 Prvi primer
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      header: "Header from state",
      content: "Content from state"
    }

  }
  render() {
    console.log("App ", this.state);
    return(
      <>
      <Header headerProp={this.state.header}/>
      <Content content={this.state.content}/>
      </>
    );
  }
}


//02.04 Drugi Primer
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class App extends React.Component {
  render() {
    return(
      <>
       <Header headerProp="First Header from App"/>
       <hr />
       <Header headerProp="Second Header from App"/>
      <Content contentProp="First Conetet Prop!"/>
      </>
    );
  }
}

//Treci primer
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {id: 1, name: "Foo", age: 20},
        {id: 2, name: "Bar", age: 30},
        {id: 3, name: "Baz", age: 40},
        {id: 4, name: "FizBaz", age: 50}
      ]

    };
  }
  render() {
    return(
      <table>
        <tbody>
          {this.state.data.map((user, i) => {
            console.log(user, i);
            return(
            <tr key={user.id}>
              <td>id: {user.id}</td>
              <td>user: {user.name}</td>
              <td>age: {user.age}</td>
            </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

//primer 4

import React from "react";
import UserTable from "./components/UserTable";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      students: [
        { firstName: "Jovan", lastName: "Jovanovic", year: 2021, mark: 9 },
        { firstName: "Petar", lastName: "Petrovic", year: 2021, mark: 9 },
        { firstName: "Ana", lastName: "Nikolic", year: 2021, mark: 8 },
        { firstName: "Marko", lastName: "Markovic", year: 2020, mark: 7 },
        { firstName: "Maja", lastName: "Maksimovic", year: 2022, mark: 10 },
        { firstName: "Ivana", lastName: "Ivanovic", year: 2021, mark: 6 },
        { firstName: "Nikola", lastName: "Nikolic", year: 2020, mark: 8 },
        { firstName: "Sanja", lastName: "Stankovic", year: 2021, mark: 7 },
        { firstName: "Luka", lastName: "Lukic", year: 2021, mark: 10 },
        { firstName: "Milan", lastName: "Milanovic", year: 2022, mark: 9 },
        { firstName: "Teodora", lastName: "Teodoric", year: 2022, mark: 8 },
        { firstName: "Jelena", lastName: "Jelenic", year: 2021, mark: 6 },
        { firstName: "Bojan", lastName: "Bojanovic", year: 2020, mark: 9 },
        { firstName: "Tijana", lastName: "Tijanovic", year: 2022, mark: 7 }
      ]
    };
  }
  render() {
    return(
      <UserTable students={this.state.students} />
    );
  }
}


//Primer 5
import React from "react";
import UserTable from "./components/UserTable";

export default class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return(
      <>
      <h1>Title: {this.props.title}</h1>
      <h2>Text: {this.props.text}</h2>
      </>
    );
  }
}

App.defaultProps = {
  title: "Default app title",
  text: "Default app text"
}

//Primer 6
import React from "react";
import UserTable from "./components/UserTable";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Initial value",
      dataArray: ["item..."]
    };
  }

  updateState = (text) => {

    var myArray = this.state.dataArray;
    console.log("before ", myArray)
    myArray.push("novi Item");
    console.log("after", myArray)

    this.setState({
      data: text
    })
  }
  render() {
    console.log(this.props)
    return(
      <>
        <input type="button" value="Update state" onClick={() => this.updateState("text from render")}/>
        <h2>State string: {this.state.data}</h2>
        <h3>State array</h3>
        <ul>
          {this.state.dataArray.map((data, i) => {
            console.log(data);
            return(
              <li key={i}>{data}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

//Primer 7
import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component {
  
  render() {
    return(
      <>
        <p>String: {this.props.propString}</p>
        <p>Number: {this.props.propNumber}</p>
        <p>Bool: {this.props.propBool ? "true" : "false"}</p>
        <p>Array: {this.props.propArray}</p>
        <p>Object: {this.props.propObject.ime+" "+this.props.propObject.prezime+" "+this.props.propObject.godine +" "+ (this.props.propObject.polozio ? "jeste" : "nije")}</p>
        <p>Function: {this.props.propFunction(10)}</p>
      </>
    );
  }
}

App.propTypes = {
  propString: PropTypes.string
}

App.defaultProps = {
  propString: 123,
  propNumber: 10,
  propBool: true,
  propArray: [1,2,3,4,5],
  propObject: {ime: "jovan", prezime: "jovanovic", godine: 20, polozio: false},
  propFunction: function (e) { return e+1}
}

//Primer 8

import React from "react";
import Increment from "./components/Increment";

export default class App extends React.Component {
  constructor(){
    super();
    console.log("Metoda constructor - App");

    this.state = {
      number: 0 
    };
  }

  componentDidMount() {
    //Poziva se nakon prvog rendera (Ajax Poziva)
    console.log("Metoda componentDidMount - App")
  }

  increment = () => {
    console.log("Metoda increment - App")
    this.setState({
      number: this.state.number + 1
    });
  }
  
  render() {
    console.log("Metoda render - App");
    return(
      <>
      <button type="button" onClick={this.increment}>Increment</button>
      <Increment propNumber = {this.state.number}/>
      </>
    );
  }
}

//primer 8

import React from "react";
import Increment from "./components/Increment";
import InventorsTable from "./components/InventorsTable";

export default class App extends React.Component {
  constructor() {
    super();
    console.log("Metoda constructor - App");

    this.state = {
      inventors: [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
      ],
      isActive: false,
    };
  }

  toggleCssClass = () => {
    console.log("toggle css class");
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    console.log("Metoda render - App");
    return (
      <>
        <h2 className="title">Table Data</h2>
        <h3
          style={{
            color: "#888",
            border: "1px solid blue",
            backgroundColor: "yellow",
            padding: "15px",
          }}
        >
          Inline css rules
        </h3>
        <div className={`main-heading ${this.state.isActive ? "active" : ""}`}>
          Main heading
        </div>
        <input
          type="button"
          value="Toggle class"
          onClick={this.toggleCssClass}
        />
        <InventorsTable inventors={this.state.inventors} />
      </>
    );
  }
}

// Primer 9

import React from "react";
import Increment from "./components/Increment";
import InventorsTable from "./components/InventorsTable";

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.newJSFeatures();
    this.promiseFeature();
  }

  newJSFeatures = () => {
    var firstName = "Milan";
    firstName = 10;
    // console.log(firstName);

    //let i const
    let lastName = "Petrovic";
    // console.log(lastName);
  };

  promiseFeature = () => {
    Promise;
  };

  render() {
    return <></>;
  }
}

// primer 9

import React from "react";
import UserList from "./components/UserList";
import Loader from "./components/Loader";
export default class App extends React.Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    // this.newJSFeatures();
    // this.promiseFeature();

    this.getPosts();
  }

  getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      posts: data,
      isLoading: false,
    });
  };

  newJSFeatures = () => {
    var firstName = "Milan";
    firstName = 10;
    // console.log(firstName);

    //let i const
    let lastName = "Petrovic";
    // console.log(lastName);
  };

  promiseFeature = async () => {
    Promise;

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        const sum = 1 + 2;
        if (sum === 2) {
          resolve("Uspesno");
        } else {
          reject("Greska");
        }
      }, 2000);
    });

    console.log(p);
    //I nacin then
    p.then((msg) => {
      console.log(msg);
    }).catch((error) => {
      console.log(error);
    });

    //II nacin: Async/Await
    try {
      const response = await p;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    console.log("state", this.state.posts);
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <>
        <UserList users={this.state.posts} />
      </>
    );
  }
}


//primer 10 
//Prvi Nacin (function)
// export default function App() {

import Content from "./components/Content";
import Header from "./components/Header";

//Drugi Nacin (const)
const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hi from App</h1>
      <Header headerProp={props.title} />
      <Content contentProp={props.text} />
    </div>
  );
};

//II nacin
export default App;


//primer 11
import { useState } from "react";
import Loader from "./components/Loader";

export default function App() {
  //React hook - useState
  //[naziv state-a, stetter metoda kojom se updatuje state]

  const [text, setText] = useState("Text from state");
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    // console.log("Toggole loading", isLoading);
    setIsLoading(!isLoading);
    // console.log("Toggole loading 2", isLoading);

    handleUpdateText();
  };

  const handleUpdateText = () => {
    // console.log("handleUpdateText");
    setText("New text from App");
  };

  return (
    <>
      <input type="button" value="Update text" onClick={toggleLoading} />
      <h2>Text value: {text}</h2>
      <Loader isLoading={isLoading} />
    </>
  );
}

//primer 12


import { useState } from "react";
import Increment from "./components/Increment";
import Loader from "./components/Loader";

export default function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState("true");

  const handleAddNumber = (increment, text) => {
    setNumber(number + increment);
  };

  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <input
        type="button"
        value="Increment 5"
        onClick={() => handleAddNumber(5)}
      />
      <input
        type="button"
        value="Increment 10"
        onClick={() => handleAddNumber(10)}
      />
      <input
        type="button"
        value="toggle is loading"
        onClick={toggleIsLoading}
      />
      <h1>Number Value: {number}</h1>
      <Loader isLoading={isLoading} />
    </>
  );
}

//12

import { useState } from "react";

export default function App() {
  const [inputValueA, setInputValueA] = useState("");
  const [inputValueB, setInputValueB] = useState("");

  const handleInputChangeA = (event) => {
    setInputValueA(event.target.value);
  };

  const handleInputChangeB = (event) => {
    setInputValueB(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={inputValueA}
        onChange={handleInputChangeA}
        placeholder="Enter Text"
      />
      <h3>Text Value A: {inputValueA}</h3>
      {/* <input
        type="text"
        name=""
        id=""
        value={inputValueB}
        onChange={handleInputChangeB}
      /> */}
      <input
        type="text"
        name=""
        id=""
        value={inputValueB}
        onChange={(event) => {
          setInputValueB(event.target.value);
        }}
      />
      <h3>Text Value B: {inputValueB}</h3>
    </>
  );
}

//Primer 13
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [number, setNumber] = useState(0);

  const handleMath = (type) => {
    if (type === "Add") {
      setNumber(number + 1);
    } else if (type === "subtract") {
      if (number <= 0) {
        console.error("Number cant be negative");
      } else {
        setNumber(number - 1);
      }
    } else if (type === "reset") {
      setNumber(0);
    } else {
      console.error("Unknown type");
    }
  };

  return (
    <>
      <div className="calculator-wrapper">
        <Button
          value="Add"
          className="button-math"
          handleClick={() => handleMath("Add")}
        />
        <Button
          value="Subtract"
          disabled={!number}
          className="button-math"
          handleClick={() => handleMath("subtract")}
        />
        <Button
          value="Reset"
          className="button-math"
          disabled={!number}
          handleClick={() => handleMath("reset")}
        />
        {/* <input
          className="button-math"
          type="button"
          value="Add"
          onClick={() => handleMath("Add")}
        />
        <input
          className="button-math"
          type="button"
          value="Subtract"
          disabled={!number}
          onClick={() => handleMath("subtract")}
        />
        <input
          className="button-math"
          type="button"
          value="Reset"
          onClick={() => handleMath("reset")}
        /> */}
        <h1>Number: {number}</h1>
      </div>
    </>
  );
}


//Primer 14

import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [dataArray, setDataArray] = useState(["item..."]);

  const handleAddItem = () => {
    const newItem = "new item...";
    setDataArray([...dataArray, newItem]);
  };

  return (
    <div className="calculator-wrapper">
      <input type="button" value="Add item" onClick={handleAddItem} />
      <ul>
        {dataArray.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ul>
    </div>
  );
}


//Primer 15
export default function App() {
  return (
    <>
      <div className="title-container">
        <h2 className="main-title">Styling with SASS</h2>
      </div>
    </>
  );
}

//Primer 16
import { useState } from "react";
import NewButton from "./components/NewButton";

export default function App() {
  const [data, setData] = useState("initial data");

  const hanldeUpdateData = (newData) => {
    console.log("handleUpdateData");
    setData(newData);
  };

  return (
    <>
      <NewButton data={data} updateState={hanldeUpdateData} />
    </>
  );
}

// primer 17
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import UserList from "./components/UserList";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  //useEffect hook, poziva se nakon prvog rendera
  useEffect(() => {
    console.log("useEffect 1");
    getPosts();
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
  }, [count]); // Sve u use Effectu se izvrsava nakon promene vrednosti count-a

  const handleIncrementNumber = () => {
    console.log("handleIncrementNumber");
    setCount(count + 1);
  };

  const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    // Prvi Nacin
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // setPosts([...data]);
    // setIsLoading(false);
    // Drugi nacin => Axios async await
    try {
      const response = await axios.get(url);
      const data = response.data;
      // console.log(data);
      setPosts([...data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <input type="button" value="Increment" onClick={handleIncrementNumber} />
      <h2>Number: {count}</h2>
      <UserList users={posts} />
    </>
  );
}

//primer 18
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      {/*Navigacija*/}
      <nav className="top-navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Rute */}
      <div style={{ backgroundColor: "#ccc", fontSize=14px }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
//Primer 19
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import TodosList from "./components/TodosList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setTodos([...data]);
      setLoading(false);
      console.log(todos);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    console.log("getTodos", todos);
  };

  return (
    <Router>
      {/*Navigacija*/}
      <nav className="top-navigation">
        <ul>
          <li>
            <NavLink to="/">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Rute */}
      <div style={{ backgroundColor: "#ccc" }}>
        <Routes>
          <Route path="/" element={<TodosList todos={todos} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

//Primer 20
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Comments from "./components/Comments";
import CommentDetails from "./components/Comment";

export default function App() {
  return (
    <>
      <Router>
        <nav className="top-navigation">
          <ul>
            <li>
              <Link to="/">Comments</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Comments />} />
          <Route path="/details/:id" element={<CommentDetails />} />
        </Routes>
      </Router>
    </>
  );
}

//Primer 21

import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Users from "./components/Users";
import User from "./components/User";

export default function App() {
  return (
    <>
      <Router>
        <nav className="top-navigation">
          <ul>
            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

//Primer 22

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <Stack
          spacing={2}
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Button variant="contained" color="success" onClick={handleIncrement}>
            Increment
          </Button>
          <h2> Vrednost broja: {number}</h2>
          <TextField
            variant="outlined"
            label="Enter some text"
            size="small"
            onChange={handleChangeText}
          />
          <h2>Vrednost Inputa: {text}</h2>
        </Stack>
      </div>
    </>
  );
}

// Primer 23
import NavSearch from "./components/NavSearch";
import Countries from "./components/Countries";
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("");
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const [search, setSearch] = useState("");
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  console.log(filter);

  return (
    <>
      <div className="page-wrapper">
        <NavSearch
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          search={search}
          handleChangeSearch={handleChangeSearch}
        />
        <Countries filter={filter} search={search} />
      </div>
    </>
  );
}

//Primer 23
import { useState } from "react";
import AddNewTask from "./components/AddNewTask";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(["task1", "task2", "task3"]);

  const handleAddTask = (task) => {
    console.log(task, "handleAddTask");

    if (task) {
      if (!todos.includes(task)) {
        setTodos([...todos, task]);
      } else {
        alert("Task already exists!");
      }
    } else {
      alert("Cannot add empty task!");
    }
  };

  const handleEraseTask = (id) => {
    let newList = [...todos];
    newList.splice(id, 1);
    setTodos(newList);
  };

  return (
    <>
      <h2>Todo List</h2>
      <AddNewTask handleAddTask={handleAddTask} />
      <TodoList todos={todos} handleEraseTask={handleEraseTask} />
    </>
  );
}

