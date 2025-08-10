'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);

  return (
    <Editor 
      apiKey='rcceemhbfcl8bw35vd591k3bm8oncf0s8k8op2kswp0aze0w'
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={value}
      init={{
        height: 600,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'advtable', 'help', 'wordcount',
          'emoticons', 'template', 'paste', 'textpattern', 'nonbreaking'
        ],
        toolbar: 'undo redo | formatselect | ' +
          'bold italic underline strikethrough | forecolor backcolor | ' +
          'alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | removeformat | ' +
          'table tabledelete | tableprops tablerowprops tablecellprops | ' +
          'tableinsertrowbefore tableinsertrowafter tabledeleterow | ' +
          'tableinsertcolbefore tableinsertcolafter tabledeletecol | ' +
          'cellBordersNone cellBordersThin cellBordersMedium cellBordersThick | ' +
          'link image media | code fullscreen help',
        contextmenu: 'link table tableprops tablecellprops tablerowprops',
        table_advtab: true,
        table_cell_advtab: true,
        table_toolbar: 'tableprops tabledelete | tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
        content_style: `
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            font-size: 14px; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
          }
          h1 { font-size: 2em; font-weight: bold; margin: 1em 0 0.5em 0; color: #2c3e50; }
          h2 { font-size: 1.5em; font-weight: bold; margin: 1em 0 0.5em 0; color: #34495e; }
          h3 { font-size: 1.25em; font-weight: bold; margin: 1em 0 0.5em 0; color: #34495e; }
          h4 { font-size: 1.1em; font-weight: bold; margin: 1em 0 0.5em 0; color: #34495e; }
          p { margin: 0 0 1em 0; }
          ul, ol { margin: 0 0 1em 1.5em; }
          li { margin: 0.25em 0; }
          blockquote { 
            border-left: 4px solid #83C5BE; 
            margin: 1em 0; 
            padding: 0.5em 1em; 
            background-color: #f8f9fa; 
            font-style: italic; 
          }
          table { 
            border-collapse: collapse; 
            width: 100%; 
            margin: 1em 0; 
          }
          table th, table td { 
            border: 1px solid #ddd; 
            padding: 8px 12px; 
            text-align: left; 
          }
          table th { 
            background-color: #f8f9fa; 
            font-weight: bold; 
          }
          .pros { background-color: #d4edda; border-left: 4px solid #28a745; padding: 1em; margin: 1em 0; }
          .cons { background-color: #f8d7da; border-left: 4px solid #dc3545; padding: 1em; margin: 1em 0; }
          .key-points { background-color: #e2e3e5; border-left: 4px solid #6c757d; padding: 1em; margin: 1em 0; }
        `,
        formats: {
          pros: { block: 'div', classes: 'pros', title: 'Pros Section' },
          cons: { block: 'div', classes: 'cons', title: 'Cons Section' },
          keypoints: { block: 'div', classes: 'key-points', title: 'Key Points Section' }
        },
        style_formats: [
          { title: 'Headings', items: [
            { title: 'Heading 1', format: 'h1' },
            { title: 'Heading 2', format: 'h2' },
            { title: 'Heading 3', format: 'h3' },
            { title: 'Heading 4', format: 'h4' }
          ]},
          { title: 'Medical Content', items: [
            { title: 'Pros Section', format: 'pros' },
            { title: 'Cons Section', format: 'cons' },
            { title: 'Key Points', format: 'keypoints' }
          ]},
          { title: 'Inline', items: [
            { title: 'Bold', format: 'bold' },
            { title: 'Italic', format: 'italic' },
            { title: 'Underline', format: 'underline' },
            { title: 'Strikethrough', format: 'strikethrough' }
          ]}
        ],
        block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Blockquote=blockquote',
        paste_as_text: false,
        paste_enable_default_filters: true,
        paste_word_valid_elements: "b,strong,i,em,h1,h2,h3,h4,h5,h6",
        paste_retain_style_properties: "color background-color font-size font-weight",
        table_default_styles: {
          width: '100%'
        },
        table_default_attributes: {
          border: '1'
        },
        link_list: [
          { title: 'My page 1', value: 'https://www.example.com' },
          { title: 'My page 2', value: 'https://www.example.com' }
        ],
        image_list: [
          { title: 'My image 1', value: 'https://www.example.com/image1.jpg' },
          { title: 'My image 2', value: 'https://www.example.com/image2.jpg' }
        ],
        file_picker_callback: function (callback, value, meta) {
          if (meta.filetype === 'image') {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.onchange = function () {
              const file = this.files[0];
              const reader = new FileReader();
              reader.onload = function () {
                callback(reader.result, { alt: file.name });
              };
              reader.readAsDataURL(file);
            };
            input.click();
          }
        },
        setup: function (editor) {
          // Quick actions to apply borders to selected cells
          const applyCellBorder = (width) => {
            const value = width === 0 ? '0' : `${width}px`;
            editor.execCommand('mceTableApplyCellStyle', false, {
              'border-width': value,
              'border-style': width === 0 ? 'none' : 'solid',
              'border-color': '#cccccc'
            });
          };

          editor.ui.registry.addButton('cellBordersNone', {
            tooltip: 'No cell borders',
            text: 'Cell Borders: None',
            onAction: () => applyCellBorder(0)
          });
          editor.ui.registry.addButton('cellBordersThin', {
            tooltip: 'Thin cell borders',
            text: 'Cell Borders: 1px',
            onAction: () => applyCellBorder(1)
          });
          editor.ui.registry.addButton('cellBordersMedium', {
            tooltip: 'Medium cell borders',
            text: 'Cell Borders: 2px',
            onAction: () => applyCellBorder(2)
          });
          editor.ui.registry.addButton('cellBordersThick', {
            tooltip: 'Thick cell borders',
            text: 'Cell Borders: 3px',
            onAction: () => applyCellBorder(3)
          });

          // Existing medical content helpers
          editor.ui.registry.addButton('pros', {
            text: 'Pros',
            onAction: function () {
              editor.insertContent('<div class="pros"><h4>Pros:</h4><ul><li>Advantage 1</li><li>Advantage 2</li></ul></div>');
            }
          });
          editor.ui.registry.addButton('cons', {
            text: 'Cons',
            onAction: function () {
              editor.insertContent('<div class="cons"><h4>Cons:</h4><ul><li>Disadvantage 1</li><li>Disadvantage 2</li></ul></div>');
            }
          });
          editor.ui.registry.addButton('keypoints', {
            text: 'Key Points',
            onAction: function () {
              editor.insertContent('<div class="key-points"><h4>Key Points:</h4><ul><li>Point 1</li><li>Point 2</li></ul></div>');
            }
          });
        }
      }}
      onEditorChange={(content) => onChange(content)}
    />
  );
}
