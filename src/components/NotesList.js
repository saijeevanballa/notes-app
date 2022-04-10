import React from "react";
import { edit, trash } from "../utils/svg";
import { useHistory } from "react-router-dom";

export default function NotesList(props) {
	let history = useHistory();
	return (
		<div className="ml-5 mr-5 mt-4" style={{
			display: "flex",
			justifyContent: "center"
		}}>
			{props.list.length ? <table className="table table-hover" style={{
				borderRadius: "15px",
				boxShadow: `-10px -10px 10px rgba(255,255,255,0.2),
                    10px 10px 10px rgba(0,0,0,0.1)`
			}}>
				<thead >
					<tr>
						<th>#</th>
						<th style={{ width: "80%" }}>Title</th>
						<th>sync</th>
						<th>edit</th>
						<th>delete</th>
					</tr>
				</thead>
				<tbody>
					{props.list.map((obj, i) => (
						<tr key={obj.id}>
							<th scope="row" onClick={() =>
								history.push({
									pathname: `edit/${obj.id}`,
									state: obj
								})
							}>{i + 1}</th>
							<td onClick={() =>
								history.push({
									pathname: `edit/${obj.id}`,
									state: obj
								})
							}>{obj.name}</td>
							<td onClick={() => props.deleteNotes(obj.id)}>
								<img style={{
									width: 24,
									height: 24
								}} src="./static/synchronize.gif"></img>
							</td>
							<td
								onClick={() =>
									history.push({
										pathname: `edit/${obj.id}`,
										state: obj
									})
								}>
								<img style={{
									width: 24,
									height: 24
								}} src="./static/edit.gif"></img>
							</td>
							<td onClick={() => props.deleteNotes(obj.id)}>
								<img style={{
									width: 24,
									height: 24
								}} src="./static/trash.gif"></img>
							</td>
						</tr>
					))}
				</tbody>
			</table> : <p>No Records Found</p>}
		</div >
	);
}
