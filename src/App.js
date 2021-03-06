import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   this.getUsers();
  // }

  // getUsers = async () => {
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // };

  //Search Github users
  handleSearch = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear Users from State
  handleClear = () => this.setState({ users: [], loading: false });

  //Set Alert
  handleAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    const timer = setTimeout(() => {
      this.setState({ alert: null });
      clearTimeout(timer);
    }, 4000);
  };

  render() {
    const { loading, users, alert } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Search
            searchUsers={this.handleSearch}
            clearUsers={this.handleClear}
            hasUsers={users.length > 0}
            setAlert={this.handleAlert}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
