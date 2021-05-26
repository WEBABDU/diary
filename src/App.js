import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import AddNote from "./components/AddNote";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { ModalState } from "./context/modal/ModalState";
import { NotesState } from "./context/notes/NotesState";

const App = () => {
  const WhithRouterComponent = withRouter(Navbar)
  return (
    <AlertState>
      <ModalState>
        <NotesState>
          <BrowserRouter>
            <div className="container">
              
              <WhithRouterComponent />
              <Switch>
                <Route path="/" exact component={Content} />
                <Route path="/content" component={Content} />
                <Route path="/add" component={AddNote} />
              </Switch>
            </div>
          </BrowserRouter>
        </NotesState>
      </ModalState>
    </AlertState>
  );
};

export default App;
