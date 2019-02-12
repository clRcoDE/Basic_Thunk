import GET_USERS  from '../Types'


export const getUsers = () => {
    return  {
        type:'GET_USERS',
        username:'aaaa'
    }
}

export function loadData() {
    return dispatch => fetch(`https://randomuser.me/api/`) // Redux Thunk handles these
      .then(res => res.json())
      .then(
        data => dispatch({ type: 'LOAD_DATA_SUCCESS', data:data.results[0].gender }),
        err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
      );
  }