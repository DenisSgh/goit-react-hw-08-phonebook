import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { userRejected } from 'redux/auth/authOperations';

export default function Notification() {
  const dispatch = useDispatch();
  const message = 'Something wrong, please try again';

  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });

    dispatch(userRejected());
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}
