import React from 'react'
import { Button } from 'antd'
import axios from 'src/config/axios'


interface IIndexState {
 userInfo: any
}
interface IRouter {
  history: any
}


export default class extends React.Component<IRouter,IIndexState>{
  constructor(props:any){
    super(props)
    this.state = {
      userInfo:{}
    }
  }
  async componentWillMount(){
    await this.getCurrentUser()
  }
  logout=()=>{
    localStorage.setItem('xToken','')
    this.props.history.push('/login')
  }
  getCurrentUser = async ()=>{
    const response = await axios.get('/me')
    this.setState({userInfo: response.data})
  }
  public render(){
    return (
      <div className='container'>
      <p>欢迎，{this.state.userInfo.account}</p>
      <Button onClick={this.logout}>登出</Button>
      </div>
    )
  }
}
