import Home from "./components/home";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Search from "./components/search";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [valueInput, setValueInput] = useState("");

  const getApi = (value) => {
    const userUrl = `https://api.github.com/users/${value}`;
    axios.get(userUrl).then((res) => setUserInfo(res.data));
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    const keyCode = event.which || event.keyCode;

    if (keyCode === 13) getApi(value);

    setValueInput(value);
  };

  return (
    <Container>
      <Search valueInput={valueInput} handleSearch={handleSearch} />
      {!!userInfo && <Home userInfo={userInfo} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10vw;
  height: 100vh;
  width: 100vw;
`;

export default App;
