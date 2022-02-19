import {useCallback} from "react";

import "./App.css";
import {StylesManager, Model, Survey} from "survey-react";
// import textJson from "./components/surveys/textQuestion";
import radioJson from "./components/surveys/radioQuestions";

StylesManager.applyTheme("modern");

function App() {
	const survey = new Model(radioJson);
	survey.focusFirstQuestionAutomatic = false;

	const alertResults = useCallback((sender) => {
		const results = JSON.stringify(sender.data);
		alert(results);
	}, []);

	survey.onComplete.add(alertResults);
	return (
		<div className='App'>
			<Survey model={survey} />
		</div>
	);
}

export default App;
