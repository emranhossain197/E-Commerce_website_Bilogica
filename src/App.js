import Bilogica from "./router/Bilogica";
import ContextProveder from "./context/BilogicContext";

const App = () => {
  return (
    <ContextProveder>
      <Bilogica />
    </ContextProveder>
  )
}

export default App;
