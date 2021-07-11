import React from 'react';
import Videos from './components/Videos';
import Articles from './components/Articles';
import Home from './Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import General_Information from './components/General_Information';
import { CategoriesContainer } from "./contexts/CategoriesContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {

  return (
    <PaperProvider>
      <CategoriesContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/starting_with_safety/general_information" component={General_Information} />
            <Route path="/starting_with_safety/videos" component={Videos} />
            <Route path="/starting_with_safety/articles" component={Articles} />
          </Switch>
        </BrowserRouter>
      </CategoriesContainer>
    </PaperProvider>
  );
}
