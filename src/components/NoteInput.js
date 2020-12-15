import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NotesEditor(props) {
	const [hidden, setHidden] = useState(false);
	let onContentStateChange = async (contentState) => {
		let data = convertFromRaw(contentState);
		let { entityMap, blockMap } = data.toJSON();
		props.handleContent({
			entityMap,
			blocks: Object.keys(blockMap).map((KEY) => blockMap[KEY])
		});
	};

	return (
		<Editor
			defaultContentState={formatContent(props.content)}
			toolbarStyle={{ border: "1px solid", borderRadius: 10 }}
			editorStyle={{ border: "1px solid", minHeight: "85vh", borderRadius: 10 }}
			onContentStateChange={onContentStateChange}
			toolbarHidden={hidden}
		/>
	);
}

function formatContent(value) {
	return value;
}
