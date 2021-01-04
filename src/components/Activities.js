import React, {useState, useEffect} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useDispatch, useSelector} from 'react-redux';
import activities from '../styles/activitiesStyle';
import {activitiesAction} from '../redux/actions/actionCreator';
import {getEarnings as getEarningsData} from '../redux/actions/actionCreator';

const Activities = (props) =>{

    const [state, setState] = useState({active: false, data: ''});
    const dispatch = useDispatch();

    const select = useSelector((e) =>{
        return e;
    });

    const  override = `
    display: block;
    margin: 0 auto;
    border-color: black;
    `;

    useEffect(() =>{
         dispatch(activitiesAction());
        
    }, [dispatch]);

    const getEarnings = () =>{
        dispatch(getEarningsData())
    }

    const getAllTransacrtions = () =>{
        dispatch(activitiesAction());
    }

    const getExpenses = () =>{
        
    }

    const getDate = (e) =>{
        let date = new Date(e);
        return date.toDateString();
    }

    // console.log(select);

    return(

<div style={activities.activities_reset}>
            
        <div style={activities.activities_header}>

     <h3 style={activities.activities_h3}>Recent Activities</h3>

            <ul style={activities.activities_ul}>
                <li style={activities.activities_li}><button style={activities.activities_a} onClick={() =>{
                    getAllTransacrtions();
                }}>All transaction</button></li>
                <li style={activities.activities_li}  onClick={() =>{
                    getEarnings();
                }}><button style={activities.activities_a} >Earnings</button></li>
                <li style={activities.activities_li} ><button style={activities.activities_a} href='/three'>Expenses</button></li>
            </ul>
        
                <div style={activities.activity_list}>
                  {
                      !select.activity.activities ? <ClipLoader  css={override} size='20px'/> : select.activity.activities.transaction.map((e) =>(
                        <div key={e.id} style={activities.activity_list_div}>
                        <p style={activities.activity_list_h3} >{e.transaction_name}</p>
                      <p style={activities.activity_list_p} >K {e.transaction_ammount}</p>
                      <p style={activities.activity_list_date} >{getDate(e.transaction_date)}</p>
                        </div>
                      ))
                  }
                </div>
        </div>

</div>

    )
}

export default Activities;