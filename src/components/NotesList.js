import React from "react";
import { edit, trash } from "../utils/svg";
import { useHistory } from "react-router-dom";

export default function NotesList(props) {
	let history = useHistory();
	return (
		<div className="m-1">
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th style={{ width: "80%" }}>Title</th>
						<th>edit</th>
						<th>delete</th>
					</tr>
				</thead>
				<tbody>
					{props.list.map((obj, i) => (
						<tr key={obj.id}>
							<th scope="row">{i + 1}</th>
							<td>{obj.name}</td>
							<td
								onClick={() =>
									history.push({
										pathname: `edit/${obj.id}`,
										state: obj
									})
								}>
								{edit}
							</td>
							<td onClick={() => props.deleteNotes(obj.id)}>{trash}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div >
	);
}
