'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);

  return (
    <Editor 
      apiKey='rcceemhbfcl8bw35vd591k3bm8oncf0s8k8op2kswp0aze0w' // or your actual key
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'lists', // 🟢 This enables bullet/numbered lists
          'advlist', // improves list formatting options
          'autolink',
          'link',
          'charmap',
          'preview',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'table',
          'paste',
          'help',
          'wordcount',
          'table',
          
        ],
        toolbar:
          'undo redo | formatselect | bold italic underline | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | blockquote , p , h1 , h2 , h3 , h4 , h5 , h6 , link',
          block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2',  
      }}
      onEditorChange={(content) => onChange(content)}
    />
  );
}
