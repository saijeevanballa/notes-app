import { SAVE, DELETE, EDIT } from "../types/editorBoard";
import { v4 as uuidv4 } from "uuid";

const initState = { list: [] };

const reducer = (state = initState, action) => {
	switch (action.type) {
		case SAVE:
			return { list: state.list.concat([{ ...action.body, id: uuidv4() }]) };
		case DELETE:
			return { list: state.list.filter(({ id }) => action.id !== id) };
		case EDIT: {
			return {
				list: state.list
					.filter((obj) => obj.id !== action.id)
					.concat([
						{
							...action.body,
							id: action.id
						}
					])
			};
		}

		default:
			return state;
	}
};

export default reducer;
