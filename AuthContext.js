// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const login = (type, userData) => {
    setIsLoggedIn(true);
    setUserType(type);
    setName(userData.name);
    setUsername(userData.username);
    setAddress(userData.address);
    setPhoneNumber(userData.phoneNumber);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(''); // 로그아웃 시 유저 타입 초기화
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userType, name, username, address, phoneNumber }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
