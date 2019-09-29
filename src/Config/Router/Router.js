import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home,Signup,Login,QuizDetail,QuizRender} from '../../Containers'

import {Dashboard,AdminLogin, AddQuiz, EditQuiz, DeleteQuiz} from '../../Containers/AdminPanel'

function BasicExample() {
  return (
    <Router>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-quiz" component={AddQuiz} />
         <Route path="/edit-quiz" component={EditQuiz} />
        <Route path="/delete-quiz" component={DeleteQuiz} /> 
        <Route path="/quiz-detail" component={QuizDetail} /> 
        <Route path="/quiz-Render" component={QuizRender} /> 

    </Router>
  );
}
export default BasicExample