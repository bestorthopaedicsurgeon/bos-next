'use client';

import React, { useState } from 'react';
import CustomRichTextEditor from './CustomRichTextEditor';

export default function CustomRichTextEditorDemo() {
  const [content, setContent] = useState(`
    <h1>Welcome to Your Custom Rich Text Editor!</h1>
    <p>This is a fully custom rich text editor with all the features you need:</p>
    <ul>
      <li><strong>Full table functionality</strong> - Create, edit, add/remove rows and columns</li>
      <li><strong>Text formatting</strong> - Bold, italic, underline, strikethrough</li>
      <li><strong>Text alignment</strong> - Left, center, right, justify</li>
      <li><strong>Lists and blockquotes</strong> - Bullet lists, numbered lists, quotes</li>
      <li><strong>Headings</strong> - H1, H2, H3, H4</li>
      <li><strong>Color picker</strong> - Text and background colors</li>
      <li><strong>Image insertion</strong> - Add images with URLs</li>
      <li><strong>Link creation</strong> - Insert clickable links</li>
      <li><strong>Medical content blocks</strong> - Pros, cons, and key points</li>
      <li><strong>Responsive design</strong> - Works on all devices</li>
    </ul>
    
    <h2>Try the Table Features</h2>
    <p>Click the 📊 button to insert a table, then use the table controls to:</p>
    <ul>
      <li>➕ Add rows and columns</li>
      <li>🗑️ Delete rows and columns</li>
      <li>Edit cell content directly</li>
    </ul>
    
    <h2>Medical Content Templates</h2>
    <p>Use the special buttons for medical content:</p>
    <ul>
      <li>✅ <strong>Pros Section</strong> - Highlight advantages</li>
      <li>❌ <strong>Cons Section</strong> - List disadvantages</li>
      <li>💡 <strong>Key Points</strong> - Emphasize important information</li>
    </ul>
    
    <h2>Start Writing!</h2>
    <p>Click anywhere in the editor below and start creating your content. All features are completely free and customizable!</p>
  `);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1>Custom Rich Text Editor Demo</h1>
        <p>A fully featured, responsive rich text editor with table functionality</p>
      </div>
      
      <div className="demo-editor">
        <CustomRichTextEditor
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing your content here..."
        />
      </div>
      
      <div className="demo-output">
        <h3>Generated HTML Output:</h3>
        <div className="html-output">
          <pre>{content}</pre>
        </div>
      </div>

      <style jsx>{`
        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .demo-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
        }

        .demo-header h1 {
          margin: 0 0 10px 0;
          font-size: 2.5em;
          font-weight: 700;
        }

        .demo-header p {
          margin: 0;
          font-size: 1.2em;
          opacity: 0.9;
        }

        .demo-editor {
          margin-bottom: 30px;
        }

        .demo-output {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
        }

        .demo-output h3 {
          margin: 0 0 15px 0;
          color: #1e293b;
          font-size: 1.3em;
        }

        .html-output {
          background: #1e293b;
          border-radius: 6px;
          padding: 15px;
          overflow-x: auto;
        }

        .html-output pre {
          margin: 0;
          color: #e2e8f0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 12px;
          line-height: 1.4;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        @media (max-width: 768px) {
          .demo-container {
            padding: 15px;
          }

          .demo-header h1 {
            font-size: 2em;
          }

          .demo-header p {
            font-size: 1.1em;
          }
        }
      `}</style>
    </div>
  );
}
