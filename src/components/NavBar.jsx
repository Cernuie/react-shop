import axios from 'axios';
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function NavBar(props) {
  const history = useHistory();

  return(
    <nav>
      <div>
        <div className='flex-space'>
          Placeholder 1
        </div>
        <div className='flex-lists'>
          <div>
            <a href="/" className='btn-style'> Home </a>
          </div>
          <div>
            <a href='expenses' className='btn-style'> Expenses </a>
          </div>
          <div>
            <a href='invoices' className='btn-style'> Invoices </a>
          </div>
        </div>
      </div>
    </nav>
  )
}