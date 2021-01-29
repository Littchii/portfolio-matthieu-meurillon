import {Editor, EditorState} from 'draft-js';
import { useState } from 'react';
import '../styles/Admin.css';

const Admin = () => {

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    console.log(editorState);

    return (
        <div className="adminContainer">
            <Editor 
            editorState={editorState} 
            onChange={setEditorState} />
        </div>
    )

}

export default Admin;