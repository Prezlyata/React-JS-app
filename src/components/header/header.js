import React, { Component } from 'react';
import './header.scss';
import data from '../../../data.json';


class Header extends Component{

    constructor(props){
        super(props);
        
        this.state = {
          items: data
        }
      }


    render() {
      // console.log(this.state.items);
        return(
            <div>
                <h1 className="text">ТарssssасБ</h1>
                <h2 className="text2">fdfsdssssssfdf</h2>

            {
            this.state.items.map((item, index) => (
              <div>
                <p className="text">{item.url}</p>
                <p className="text2">{item.title}</p>
              </div>
            ))}

            </div>
        );
    } 
};

export default Header;