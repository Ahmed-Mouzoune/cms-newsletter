import { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import './editor.scss'

export default function Editor() {
    const emailEditorRef : any = useRef(null);
    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data : any) => {
            const { design, html } = data;
            // console.log('exportHtml', html);
            console.log('exportDesign', design);
        });
    };
    const onLoad = () => {
        console.log('load');
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    }
    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };
    return (
        <>
            <nav className='editor-menu'>
                <h1>test</h1>
                <div className="editor-btns">
                    <button onClick={exportHtml}>
                        Export HTML
                    </button>
                    <button>
                        Save TEMPLATE
                    </button>
                    <button>
                        Select Template
                    </button>
                </div>
            </nav>
            <EmailEditor ref={emailEditorRef} onLoad={onLoad}/>
        </>
    );
}
