import { IUserData } from '../types/user.datatype';

const saveState = (state: IUserData) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('user', serialisedState);
    // eslint-disable-next-line no-empty
  } catch (err) { }
};

const loadState = (): IUserData => {
  const intermediate: IUserData = {
    token: '',
    user: {
      id: 0,
      fullName: '',
      birthDay: '',
      email: '',
    },
  };
  try {
    const serialisedState = localStorage.getItem('user');
    if (!serialisedState) return intermediate;
    return JSON.parse(serialisedState);
  } catch (err) {
    return intermediate;
  }
};

export default {
  saveState,
  loadState,
};
