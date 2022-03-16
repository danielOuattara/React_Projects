import { Component } from 'react'
import LoadingClass from './LoadingClass';
import ToursClass from './ToursClass';


const url = 'https://course-api.com/react-tours-project';

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
       loading: true,
       isError: false,
       errorMessage: '',
       tours: [],
    }
  }

  fetchTours = async () => {
    // async function fetchTours() {
      try {
        const res = await fetch(url);
        if(!res.ok) {
          this.setState({
            isError: true,
            loading: false,
            errorMessage: `${res.status} ${res.statusText}`          
          })
          throw Error(`${res.status} ${res.statusText}`)
        }
        const data = await res.json();
        this.setState({
          tours: data,
          loading: false,
          errorMessage: ""
        });

      } catch (err) {
        this.setState({
          loading: false,
          isError: true
        });
        return err;
      }
    }
  
  
  componentDidMount() {
    this.fetchTours();
  }
    
  // removeTourItem = (id) => {  // OK!
  //   this.setState((prevState) => {
  //     return { tours: prevState.tours.filter(item => item.id !== id)};
  //   });
  // }

  removeTourItem = (id) => {  // OK !
    this.setState((prevState) => ({
      tours: prevState.tours.filter(item => item.id !== id)
    }));
  }

  render() {
    if(this.state.isError) {
      return (
        <main>
          <div className='title'>
            <h2>{this.state.errorMessage}</h2>
          </div>
        </main>
      );
    }
  
    if(this.state.loading) {
      return ( 
        <main>
          <LoadingClass />
        </main>
      ); 
    }
  
    if(this.state.tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>no tour left</h2>
            <button className='btn' onClick={() =>this.fetchTours()} >refresh</button>
          </div>
        </main>
      );
    }
  
    return (
      <main>
        <ToursClass 
          tours={this.state.tours} 
          removeTourItem={this.removeTourItem}
        />
      </main>
    );

  }
}

//-----------------------------------

