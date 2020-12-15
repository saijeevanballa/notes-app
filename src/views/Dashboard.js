import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import NotesList from "../components/NotesList";
import { DELETE } from "../store/types/editorBoard";

function DashBoard(props) {
	let history = useHistory();
	return (
		<>
			<button
				onClick={() => {
					history.push(`edit`);
				}}
				className="btn-primary"
				style={{
					borderRadius: 5,
					position: "relative",
					left: "85%",
					margin: 5
				}}>
				create
			</button>
			<NotesList list={props.list} deleteNotes={props.deleteNotes} />;
		</>
	);
}

export default connect(
	({ list }) => {
		return {
			list
		};
	},
	(dispatch) => {
		return {
			deleteNotes: (id) => dispatch({ type: DELETE, id })
		};
	}
)(DashBoard);
