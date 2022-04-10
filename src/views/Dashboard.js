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
					left: "80%",
					margin: 5
				}}>
				<img style={{
					width: 24,
					height: 24
				}} src="https://img.icons8.com/color/48/000000/add-file.png"></img> Create Document
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
