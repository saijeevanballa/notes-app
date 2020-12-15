import { SAVE } from "../types/editorBoard";

export const saveNote = (body) => async (dispatch) => {
	try {
		console.log("hitted ===>", body);
		return await dispatch({ type: SAVE, body });
	} catch (error) {
		alert(`${error}`);
	}
};
