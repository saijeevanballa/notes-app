import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState, convertFromHTML, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NotesEditor(props) {
	const [hidden, setHidden] = useState(false);
	const [editorState, setEditorState] = useState(
		props.content ? getHtmlToEditorState(props.content) : EditorState.createEmpty()
	);

	let onEditorStateChange = editorState => {
		let editorContent = formatContent(editorState);
		props.handleContent(editorContent);
		setEditorState(editorState);
	};

	return (
		<Editor
			editorState={editorState}
			toolbarStyle={{ border: "1px solid", borderRadius: 10 }}
			editorStyle={{ border: "1px solid", minHeight: "85vh", borderRadius: 10 }}
			onEditorStateChange={onEditorStateChange}
			toolbarHidden={hidden}
		/>
	);
}

let getHtmlToEditorState = html => {
	const blocksFromHTML = convertFromHTML(html)
	const content = ContentState.createFromBlockArray(blocksFromHTML)
	return EditorState.createWithContent(content)
}

function formatContent(value) {
	let valuetext = value.getCurrentContent()
	let convertText = convertToRaw(valuetext);
	let html = draftToHtml(convertText);
	return html
}
