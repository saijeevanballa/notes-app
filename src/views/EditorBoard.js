import React, { Component } from "react";
import { connect } from "react-redux";
import NotesEditor from "../components/NoteInput";
import { SAVE, EDIT } from "../store/types/editorBoard";
import { withRouter } from "react-router-dom";
import { EditorState } from "draft-js";

class EditorBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name || props?.location?.state?.name || `untitled-${new Date().getTime()}`,
			content: props.content || props?.location?.state?.content || ""
		};
	}

	handleName = (e) => {
		debugger
		this.setState({ name: e.target.value });
	};

	handleContent = (content) => {
		this.setState({ content });
	};

	routeChange = (body) => {
		if (this.props.match.params.id) {
			this.props.editNote(this.props.match.params.id, body);
		} else {
			this.props.saveNote(body);
		}
		this.props.history.push("/");
	};

	render() {
		console.log(this.state)
		return (
			<div className="m-2">
				<div className="m-2 d-flex flex-row justify-content-between">
					<div>
						<input
							value={this.state.name}
							style={{ borderRadius: 5 }}
							onChange={this.handleName}
						/>
						<button
							className="ml-2 btn-primary"
							style={{ borderRadius: 5 }}
							onClick={() => {
								let body = {
									name: this.state.name,
									content: this.state.content
								};
								this.routeChange(body);
							}}>
							save
						</button>
					</div>
					<div>
						<button
							className="btn-primary disabled"
							style={{ borderRadius: 5 }}>
							share
						</button>
					</div>
				</div>
				<div className="m-2">
					<NotesEditor
						handleContent={this.handleContent}
						content={this.state.content}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return { ...state, ...ownProps };
	},
	(dispatch) => {
		return {
			saveNote: (body) => dispatch({ type: SAVE, body }),
			editNote: (id, body) => dispatch({ type: EDIT, body, id })
		};
	}
)(withRouter(EditorBoard));
