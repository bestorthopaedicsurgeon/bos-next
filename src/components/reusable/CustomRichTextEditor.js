'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import './CustomRichTextEditor.css';

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function CustomRichTextEditor({ value, onChange, placeholder = "Start writing..." }) {
  const editorRef = useRef(null);
  const lastCursorPositionRef = useRef(null);
  const tableRowsInputRef = useRef(null);
  const tableColsInputRef = useRef(null);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [tableRowsInput, setTableRowsInput] = useState('3');
  const [tableColsInput, setTableColsInput] = useState('3');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [currentAlignment, setCurrentAlignment] = useState('left');
  const [internalValue, setInternalValue] = useState(value || '');
  const [isInitialized, setIsInitialized] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);

  const colors = [
    '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
    '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
    '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc',
    '#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#a4c2f4', '#b4a7d6', '#d5a6bd'
  ];

  // Initialize editor content and handle value changes
  useEffect(() => {
    if (editorRef.current) {
      if (!isInitialized) {
        // First time initialization
        editorRef.current.innerHTML = value || '';
        setIsInitialized(true);
        // Focus the editor after initialization
        setTimeout(() => {
          editorRef.current?.focus();
        }, 100);
      } else if (value !== internalValue) {
        // Handle external value changes after initialization
        editorRef.current.innerHTML = value || '';
        setInternalValue(value || '');
      }
    }
  }, [value, isInitialized, internalValue]);

  // Force update editor content when value changes significantly (like switching blogs)
  useEffect(() => {
    if (isInitialized && editorRef.current && value !== internalValue) {
      editorRef.current.innerHTML = value || '';
      setInternalValue(value || '');
      // Clear any saved cursor position when switching blogs
      setCursorPosition(null);
      lastCursorPositionRef.current = null;
    }
  }, [value]); // Only depend on value, not internalValue



  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateContent();
  };

  // Reset editor state when switching blogs
  const resetEditor = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value || '';
      setInternalValue(value || '');
      setIsInitialized(true);
      // Clear any saved cursor position
      setCursorPosition(null);
      lastCursorPositionRef.current = null;
    }
  };

  // Clean content by removing editor-specific attributes
  const cleanContentForSaving = (htmlContent) => {
    // Create a temporary div to parse and clean the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    console.log('Cleaning content before saving...');
    console.log('Original content length:', htmlContent.length);
    
    // Remove contenteditable attributes from all elements
    const editableElements = tempDiv.querySelectorAll('[contenteditable]');
    console.log('Found editable elements:', editableElements.length);
    editableElements.forEach(el => {
      console.log('Removing contenteditable from:', el.tagName, el.className);
      el.removeAttribute('contenteditable');
    });
    
    // Remove data-placeholder attributes
    const placeholderElements = tempDiv.querySelectorAll('[data-placeholder]');
    console.log('Found placeholder elements:', placeholderElements.length);
    placeholderElements.forEach(el => {
      console.log('Removing data-placeholder from:', el.tagName, el.className);
      el.removeAttribute('data-placeholder');
    });
    
    // Remove editor-specific classes that shouldn't be in published content
    const editorElements = tempDiv.querySelectorAll('.editor-table');
    console.log('Found editor table elements:', editorElements.length);
    editorElements.forEach(el => {
      console.log('Removing editor-table class from:', el.tagName);
      el.classList.remove('editor-table');
    });
    
    // Additional cleaning: remove any remaining contenteditable attributes
    const remainingEditable = tempDiv.querySelectorAll('[contenteditable]');
    if (remainingEditable.length > 0) {
      console.log('Warning: Still found editable elements after cleaning:', remainingEditable.length);
      remainingEditable.forEach(el => {
        el.removeAttribute('contenteditable');
      });
    }
    
    const cleanedContent = tempDiv.innerHTML;
    console.log('Cleaned content length:', cleanedContent.length);
    
    return cleanedContent;
  };

  const updateContent = () => {
    if (editorRef.current) {
      const savedSelection = preserveSelection();
      const newContent = editorRef.current.innerHTML;
      
      // Store cursor position for restoration
      if (savedSelection) {
        setCursorPosition(savedSelection);
      }
      
      // Clean the content before saving (remove editor-specific attributes)
      const cleanedContent = cleanContentForSaving(newContent);
      
      // Use debounced update to prevent cursor jumping
      debouncedUpdate(cleanedContent);
    }
  };

  // Debounced update to prevent excessive re-renders
  const debouncedUpdate = useCallback(
    debounce((content) => {
      if (content !== internalValue) {
        setInternalValue(content);
        onChange(content);
      }
    }, 150),
    [internalValue, onChange]
  );

  // Handle input without causing re-renders
  const handleInput = (e) => {
    const savedSelection = preserveSelection();
    if (savedSelection) {
      setCursorPosition(savedSelection);
    }
    // Don't call updateContent here to prevent cursor jumping
  };

  // Handle keyboard events for table deletion
  const handleKeyDown = (e) => {
    // Handle table deletion when Delete or Backspace is pressed inside a table
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const table = findClosestElement(range.commonAncestorContainer, 'table');
        
        if (table && table.classList.contains('editor-table')) {
          // Check if we're at the beginning of a cell or if the cell is empty
          const cell = findClosestElement(range.commonAncestorContainer, 'td, th');
          if (cell) {
            const cellText = cell.textContent || '';
            const isAtStart = range.startOffset === 0;
            const isAtEnd = range.endOffset === cellText.length;
            
            // If Backspace at start or Delete at end, delete the entire table
            if ((e.key === 'Backspace' && isAtStart) || (e.key === 'Delete' && isAtEnd)) {
              e.preventDefault();
              if (confirm('Delete entire table? This action cannot be undone.')) {
                table.remove();
                updateContent();
                // Focus the editor after table deletion
                if (editorRef.current) {
                  editorRef.current.focus();
                }
              }
            }
          }
        }
      }
    }
  };

  // Handle right-click context menu for table deletion
  const handleContextMenu = (e) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const table = findClosestElement(range.commonAncestorContainer, 'table');
      
      if (table && table.classList.contains('editor-table')) {
        e.preventDefault();
        if (confirm('Delete entire table? This action cannot be undone.')) {
          table.remove();
          updateContent();
          // Focus the editor after table deletion
          if (editorRef.current) {
            editorRef.current.focus();
          }
        }
      }
    }
  };

  // Update content on specific events that don't interfere with typing
  const handleContentUpdate = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      if (newContent !== internalValue) {
        debouncedUpdate(newContent);
      }
    }
  };

  // Restore cursor position when internal value changes
  useEffect(() => {
    if (cursorPosition && editorRef.current) {
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        restoreSelection(cursorPosition);
        setCursorPosition(null);
      });
    }
  }, [internalValue, cursorPosition]);

  const preserveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (editorRef.current && editorRef.current.contains(range.commonAncestorContainer)) {
        const savedSelection = {
          startContainer: range.startContainer,
          startOffset: range.startOffset,
          endContainer: range.endContainer,
          endOffset: range.endOffset
        };
        lastCursorPositionRef.current = savedSelection;
        return savedSelection;
      }
    }
    return lastCursorPositionRef.current;
  };

  const restoreSelection = (savedSelection) => {
    if (savedSelection && editorRef.current) {
      try {
        const selection = window.getSelection();
        const range = document.createRange();
        range.setStart(savedSelection.startContainer, savedSelection.startOffset);
        range.setEnd(savedSelection.endContainer, savedSelection.endOffset);
        selection.removeAllRanges();
        selection.addRange(range);
      } catch (e) {
        // If selection restoration fails, just focus the editor
        editorRef.current.focus();
      }
    }
  };

  const handleTableCellEdit = (event) => {
    const cell = event.target;
    const placeholder = cell.getAttribute('data-placeholder');
    
    // If cell is empty and user clicks, show placeholder
    if (!cell.textContent.trim() && placeholder) {
      cell.textContent = '';
    }
    
    // Remove placeholder styling when user starts typing
    if (cell.textContent.trim()) {
      cell.classList.remove('empty-cell');
    } else {
      cell.classList.add('empty-cell');
    }
  };

  const insertTable = () => {
    // Get the current input values directly from the refs to ensure we have the latest
    const rowsInputValue = tableRowsInputRef.current?.value;
    const colsInputValue = tableColsInputRef.current?.value;
    
    // Parse the input values, with fallbacks
    const rows = parseInt(rowsInputValue || tableRowsInput || tableRows) || 3;
    const cols = parseInt(colsInputValue || tableColsInput || tableCols) || 3;
    
    // Ensure editor is focused and cursor position is maintained
    if (editorRef.current) {
      editorRef.current.focus();
      
      // Restore saved cursor position if available
      if (cursorPosition) {
        try {
          const selection = window.getSelection();
          const range = document.createRange();
          range.setStart(cursorPosition.startContainer, cursorPosition.startOffset);
          range.setEnd(cursorPosition.endContainer, cursorPosition.endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        } catch (e) {
          // If cursor restoration fails, create selection at the end
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(editorRef.current);
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        // If no saved cursor position, create one at the end of the editor
        const selection = window.getSelection();
        if (selection.rangeCount === 0) {
          const range = document.createRange();
          range.selectNodeContents(editorRef.current);
          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    }
    

    
    // Validate minimum values
    if (rows < 1 || cols < 1) {
      alert('Please enter valid numbers (minimum 1 row and 1 column)');
      return;
    }
    
    // Validate maximum values to prevent performance issues
    if (rows > 50 || cols > 50) {
      alert('Please enter reasonable numbers (maximum 50 rows and 50 columns)');
      return;
    }
    
    // Update the state values immediately
    setTableRows(rows);
    setTableCols(cols);
    
    // Add spacing before and after table for better content flow
    let tableHTML = '<div style="margin: 20px 0;"><table class="editor-table">';
    
    for (let i = 0; i < rows; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < cols; j++) {
        if (i === 0) {
          // Header row - completely empty but editable
          tableHTML += '<th data-placeholder="Enter header text"></th>';
        } else {
          // Data rows - completely empty but editable
          tableHTML += '<td data-placeholder="Enter content"></td>';
        }
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table></div>';
    

    
    // Insert the table at current cursor position
    insertHTML(tableHTML);
    
    // Reset input values
    setTableRowsInput(rows.toString());
    setTableColsInput(cols.toString());
    
    setIsTableModalOpen(false);
    
    // Show success message and focus editor
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const insertList = (listType) => {
    console.log('Inserting list:', listType);
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0 && editorRef.current && editorRef.current.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      
      // Check if there's selected text
      const selectedText = range.toString().trim();
      
      if (selectedText) {
        // If text is selected, check if it has multiple lines
        const lines = selectedText.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length > 1) {
          // Multiple lines - create a list with multiple items
          const listElement = document.createElement(listType);
          
          // Add inline styles to force list markers to show
          if (listType === 'ul') {
            listElement.style.listStyle = 'disc';
            listElement.style.listStyleType = 'disc';
          } else {
            listElement.style.listStyle = 'decimal';
            listElement.style.listStyleType = 'decimal';
          }
          
          // Create a list item for each non-empty line
          lines.forEach(line => {
            if (line.trim()) {
              const listItem = document.createElement('li');
              listItem.textContent = line.trim();
              
              // Add inline styles to force list markers to show
              if (listType === 'ul') {
                listItem.style.listStyle = 'disc';
                listItem.style.listStyleType = 'disc';
              } else {
                listItem.style.listStyle = 'decimal';
                listItem.style.listStyleType = 'decimal';
              }
              
              listElement.appendChild(listItem);
            }
          });
          
          console.log('Created list with multiple items:', listElement.outerHTML);
          
          // Replace the selected text with the list
          range.deleteContents();
          range.insertNode(listElement);
          
          // Position cursor after the list for adding more items
          range.collapse(false);
          
          // Update selection
          selection.removeAllRanges();
          selection.addRange(range);
        } else {
          // Single line - create a simple list item
          const listElement = document.createElement(listType);
          const listItem = document.createElement('li');
          listItem.textContent = selectedText; // Use the selected text
          
          // Add inline styles to force list markers to show
          if (listType === 'ul') {
            listElement.style.listStyle = 'disc';
            listElement.style.listStyleType = 'disc';
            listItem.style.listStyle = 'disc';
            listItem.style.listStyleType = 'disc';
          } else {
            listElement.style.listStyle = 'decimal';
            listElement.style.listStyleType = 'decimal';
            listItem.style.listStyle = 'decimal';
            listItem.style.listStyleType = 'decimal';
          }
          
          listElement.appendChild(listItem);
          
          console.log('Created list with single item:', listElement.outerHTML);
          
          // Replace the selected text with the list
          range.deleteContents();
          range.insertNode(listElement);
          
          // Position cursor after the list for adding more items
          range.collapse(false);
          
          // Update selection
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        // If no text is selected, create an empty list item
        const listElement = document.createElement(listType);
        const listItem = document.createElement('li');
        listItem.textContent = 'List item'; // Default text that user can edit
        
        // Add inline styles to force list markers to show
        if (listType === 'ul') {
          listElement.style.listStyle = 'disc';
          listElement.style.listStyleType = 'disc';
          listItem.style.listStyle = 'disc';
          listItem.style.listStyleType = 'disc';
        } else {
          listElement.style.listStyle = 'decimal';
          listElement.style.listStyleType = 'decimal';
          listItem.style.listStyle = 'decimal';
          listItem.style.listStyleType = 'decimal';
        }
        
        listElement.appendChild(listItem);
        
        console.log('Created empty list element:', listElement.outerHTML);
        
        // Insert the list
        range.insertNode(listElement);
        
        // Position cursor inside the list item for editing
        range.selectNodeContents(listItem);
        range.collapse(false);
        
        // Update selection
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      // Focus the editor
      editorRef.current.focus();
      
      updateContent();
    } else {
      // If no valid selection, insert at the end
      if (editorRef.current) {
        editorRef.current.focus();
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        
        const listElement = document.createElement(listType);
        const listItem = document.createElement('li');
        listItem.textContent = 'List item';
        
        // Add inline styles to force list markers to show
        if (listType === 'ul') {
          listElement.style.listStyle = 'disc';
          listElement.style.listStyleType = 'disc';
          listItem.style.listStyle = 'disc';
          listItem.style.listStyleType = 'disc';
        } else {
          listElement.style.listStyle = 'decimal';
          listElement.style.listStyleType = 'decimal';
          listItem.style.listStyle = 'decimal';
          listItem.style.listStyleType = 'decimal';
        }
        
        listElement.appendChild(listItem);
        
        console.log('Created list element at end:', listElement.outerHTML);
        
        range.insertNode(listElement);
        range.collapse(false);
        
        // Update selection
        const newSelection = window.getSelection();
        newSelection.removeAllRanges();
        newSelection.addRange(range);
        
        updateContent();
      }
    }
  };

  const insertHTML = (html) => {
    const selection = window.getSelection();
    
    // Check if the selection is inside the editor (not in modal or other elements)
    const isSelectionInEditor = selection.rangeCount > 0 && 
                               editorRef.current && 
                               editorRef.current.contains(selection.anchorNode);
    
    if (isSelectionInEditor) {
      const range = selection.getRangeAt(0);
      
      // For tables, we want to insert at the current position and push content down
      if (html.includes('<table')) {
        // Insert table at current cursor position
        const div = document.createElement('div');
        div.innerHTML = html;
        const fragment = document.createDocumentFragment();
        while (div.firstChild) {
          fragment.appendChild(div.firstChild);
        }
        
        // Insert the table
        range.insertNode(fragment);
        
        // Add event listeners to table cells for better editing experience
        const table = fragment.querySelector('table') || range.commonAncestorContainer.querySelector('table');
        if (table) {
          const cells = table.querySelectorAll('th, td');
          cells.forEach(cell => {
            cell.addEventListener('focus', handleTableCellEdit);
            cell.addEventListener('input', handleTableCellEdit);
            cell.addEventListener('blur', handleTableCellEdit);
          });
        }
        
        // Position cursor after the table
        range.collapse(false);
        
        // Update selection to show the new cursor position
        selection.removeAllRanges();
        selection.addRange(range);
      } else {
        // For other content, replace selection
        range.deleteContents();
        const div = document.createElement('div');
        div.innerHTML = html;
        const fragment = document.createDocumentFragment();
        while (div.firstChild) {
          fragment.appendChild(div.firstChild);
        }
        range.insertNode(fragment);
        range.collapse(false);
      }
    } else {
      // If no valid selection, insert at the end of the editor
      if (editorRef.current) {
        editorRef.current.focus();
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        
        const div = document.createElement('div');
        div.innerHTML = html;
        const fragment = document.createDocumentFragment();
        while (div.firstChild) {
          fragment.appendChild(div.firstChild);
        }
        range.insertNode(fragment);
        
        // Add event listeners to table cells if this is a table
        if (html.includes('<table')) {
          const table = fragment.querySelector('table') || range.commonAncestorContainer.querySelector('table');
          if (table) {
            const cells = table.querySelectorAll('th, td');
            cells.forEach(cell => {
              cell.addEventListener('focus', handleTableCellEdit);
              cell.addEventListener('input', handleTableCellEdit);
              cell.addEventListener('blur', handleTableCellEdit);
            });
          }
        }
        
        range.collapse(false);
        
        // Update selection
        const newSelection = window.getSelection();
        newSelection.removeAllRanges();
        newSelection.addRange(range);
      } else {
        console.error('Editor ref is null!');
      }
    }
    updateContent();
  };

  const insertImage = () => {
    if (imageUrl.trim()) {
      const imgHTML = `<img src="${imageUrl}" alt="${imageAlt || ''}" class="editor-image" />`;
      insertHTML(imgHTML);
      setIsImageModalOpen(false);
      setImageUrl('');
      setImageAlt('');
    }
  };

  const insertLink = () => {
    if (linkUrl.trim() && linkText.trim()) {
      const linkHTML = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="editor-link">${linkText}</a>`;
      insertHTML(linkHTML);
      setIsLinkModalOpen(false);
      setLinkUrl('');
      setLinkText('');
    }
  };

  const insertMedicalBlock = (type) => {
    let content = '';
    switch (type) {
      case 'pros':
        content = '<div class="medical-block pros"><h4>Pros:</h4><ul><li>Advantage 1</li><li>Advantage 2</li></ul></div>';
        break;
      case 'cons':
        content = '<div class="medical-block cons"><h4>Cons:</h4><ul><li>Disadvantage 1</li><li>Disadvantage 2</li></ul></div>';
        break;
      case 'keypoints':
        content = '<div class="medical-block keypoints"><h4>Key Points:</h4><ul><li>Point 1</li><li>Point 2</li></ul></div>';
        break;
      default:
        break;
    }
    insertHTML(content);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    updateContent();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgHTML = `<img src="${e.target.result}" alt="Dropped image" class="editor-image" />`;
        insertHTML(imgHTML);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // Helper function to find closest ancestor element
  const findClosestElement = (node, selector) => {
    if (!node) return null;
    
    // Helper function to check if element matches selector
    const elementMatches = (element, sel) => {
      if (element.matches && element.matches(sel)) {
        return true;
      }
      
      // Fallback for complex selectors
      if (sel === 'table') {
        return element.tagName === 'TABLE';
      }
      if (sel === 'td, th') {
        return element.tagName === 'TD' || element.tagName === 'TH';
      }
      if (sel === 'td') {
        return element.tagName === 'TD';
      }
      if (sel === 'th') {
        return element.tagName === 'TH';
      }
      
      return false;
    };
    
    // If node is an element, check if it matches
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (elementMatches(node, selector)) {
        return node;
      }
    }
    
    // Traverse up the DOM tree
    let current = node;
    while (current && current !== document.body) {
      if (current.nodeType === Node.ELEMENT_NODE) {
        if (elementMatches(current, selector)) {
          return current;
        }
      }
      current = current.parentNode;
    }
    return null;
  };

  const addTableRow = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const table = findClosestElement(range.commonAncestorContainer, 'table');
      if (table) {
        const newRow = table.insertRow();
        const colCount = table.rows[0].cells.length;
        for (let i = 0; i < colCount; i++) {
          const cell = newRow.insertCell();
          cell.textContent = `Cell ${table.rows.length}-${i + 1}`;
        }
        updateContent();
      }
    }
  };

  const addTableColumn = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const table = findClosestElement(range.commonAncestorContainer, 'table');
      if (table) {
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
          const cell = rows[i].insertCell();
          if (i === 0) {
            cell.textContent = `Header ${rows[0].cells.length}`;
            cell.classList.add('table-header');
          } else {
            cell.textContent = `Cell ${i + 1}-${rows[0].cells.length}`;
          }
        }
        updateContent();
      }
    }
  };

  const deleteTableRow = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const cell = findClosestElement(range.commonAncestorContainer, 'td, th');
      if (cell) {
        const row = cell.parentElement;
        if (row.parentElement.rows.length > 1) {
          row.remove();
          updateContent();
        }
      }
    }
  };

  const deleteTableColumn = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const cell = findClosestElement(range.commonAncestorContainer, 'td, th');
      if (cell) {
        const cellIndex = cell.cellIndex;
        const table = findClosestElement(cell, 'table');
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
          if (rows[i].cells.length > 1) {
            rows[i].deleteCell(cellIndex);
          }
        }
        updateContent();
      }
    }
  };

  const applyTextColor = (color) => {
    execCommand('foreColor', color);
    setShowColorPicker(false);
  };

  const applyBackgroundColor = (color) => {
    execCommand('hiliteColor', color);
    setShowColorPicker(false);
  };

  // Enhanced alignment functions
  const alignText = (alignment) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && editorRef.current && editorRef.current.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      
      // Check if we're inside a block element
      let blockElement = range.commonAncestorContainer;
      
      // If we're inside a text node, get its parent
      if (blockElement.nodeType === Node.TEXT_NODE) {
        blockElement = blockElement.parentElement;
      }
      
      // Find the closest block element
      while (blockElement && !['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'BLOCKQUOTE'].includes(blockElement.tagName)) {
        blockElement = blockElement.parentElement;
      }
      
      if (blockElement) {
        // Apply alignment to the block element
        blockElement.style.textAlign = alignment;
        
        // Also try execCommand as fallback
        execCommand(`justify${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`);
        
        updateContent();
      } else {
        // Fallback to execCommand if no block element found
        execCommand(`justify${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`);
        updateContent();
      }
    }
  };

  const alignLeft = () => {
    alignText('left');
    setCurrentAlignment('left');
  };
  const alignCenter = () => {
    alignText('center');
    setCurrentAlignment('center');
  };
  const alignRight = () => {
    alignText('right');
    setCurrentAlignment('right');
  };
  const alignJustify = () => {
    alignText('justify');
    setCurrentAlignment('justify');
  };

  // Function to check current alignment
  const getCurrentAlignment = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && editorRef.current && editorRef.current.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      let blockElement = range.commonAncestorContainer;
      
      if (blockElement.nodeType === Node.TEXT_NODE) {
        blockElement = blockElement.parentElement;
      }
      
      while (blockElement && !['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'BLOCKQUOTE'].includes(blockElement.tagName)) {
        blockElement = blockElement.parentElement;
      }
      
      if (blockElement) {
        return blockElement.style.textAlign || 'left';
      }
    }
    return 'left';
  };

  // Function to update alignment state based on current selection
  const updateAlignmentState = () => {
    const alignment = getCurrentAlignment();
    setCurrentAlignment(alignment);
  };

  return (
    <div className="custom-rich-editor">
      {/* Toolbar */}
      <div className="editor-toolbar">
        {/* Text Formatting */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => execCommand('bold')}
            className="toolbar-btn"
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            onClick={() => execCommand('italic')}
            className="toolbar-btn"
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            onClick={() => execCommand('underline')}
            className="toolbar-btn"
            title="Underline"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onClick={() => execCommand('strikethrough')}
            className="toolbar-btn"
            title="Strikethrough"
          >
            <s>S</s>
          </button>
        </div>

        {/* Text Alignment */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => alignLeft()}
            className={`toolbar-btn ${currentAlignment === 'left' ? 'active' : ''}`}
            title="Align Left"
          >
            ⬅️
          </button>
          <button
            type="button"
            onClick={() => alignCenter()}
            className={`toolbar-btn ${currentAlignment === 'center' ? 'active' : ''}`}
            title="Align Center"
          >
            ↔️
          </button>
          <button
            type="button"
            onClick={() => alignRight()}
            className={`toolbar-btn ${currentAlignment === 'right' ? 'active' : ''}`}
            title="Align Right"
          >
            ➡️
          </button>
          <button
            type="button"
            onClick={() => alignJustify()}
            className={`toolbar-btn ${currentAlignment === 'justify' ? 'active' : ''}`}
            title="Justify"
          >
            ⬌
          </button>
        </div>

        {/* Lists and Blockquotes */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => insertList('ul')}
            className="toolbar-btn"
            title="Bullet List"
          >
            •
          </button>
          <button
            type="button"
            onClick={() => insertList('ol')}
            className="toolbar-btn"
            title="Numbered List"
          >
            1.
          </button>
          <button
            type="button"
            onClick={() => execCommand('formatBlock', 'blockquote')}
            className="toolbar-btn"
            title="Blockquote"
          >
            &quot;
          </button>
        </div>

        {/* Format Menu */}
        <div className="toolbar-group">
          <select 
            onChange={(e) => execCommand('formatBlock', e.target.value)}
            className="format-select"
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
          </select>
        </div>

        {/* Color Picker */}
        <div className="toolbar-group relative">
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="toolbar-btn"
            title="Text Color"
          >
            🎨
          </button>
          {showColorPicker && (
            <div className="color-picker">
              <div className="color-inputs">
                <div className="color-input">
                  <label>Text:</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    title="Text Color"
                  />
                  <button onClick={() => applyTextColor(textColor)}>Apply</button>
                </div>
                <div className="color-input">
                  <label>Background:</label>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    title="Background Color"
                  />
                  <button onClick={() => applyBackgroundColor(backgroundColor)}>Apply</button>
                </div>
              </div>
              <div className="color-grid">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    onClick={() => applyTextColor(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Insert Menu */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => setIsImageModalOpen(true)}
            className="toolbar-btn"
            title="Insert Image"
          >
            🖼️
          </button>
          <button
            type="button"
            onClick={() => setIsLinkModalOpen(true)}
            className="toolbar-btn"
            title="Insert Link"
          >
            🔗
          </button>
          <button
            type="button"
            onClick={() => {
              // Preserve current cursor position before opening modal
              const selection = window.getSelection();
              if (selection.rangeCount > 0 && editorRef.current && editorRef.current.contains(selection.anchorNode)) {
                // Save the current cursor position
                const range = selection.getRangeAt(0);
                setCursorPosition({
                  startContainer: range.startContainer,
                  startOffset: range.startOffset,
                  endContainer: range.endContainer,
                  endOffset: range.endOffset
                });
              }
              
              // Reset table inputs to current state when opening modal
              setTableRowsInput(tableRows.toString());
              setTableColsInput(tableCols.toString());
              setIsTableModalOpen(true);
            }}
            className="toolbar-btn"
            title="Insert Table"
          >
            📊
          </button>
        </div>

        {/* Medical Content */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={() => insertMedicalBlock('pros')}
            className="toolbar-btn medical-btn pros"
            title="Pros Section"
          >
            ✅
          </button>
          <button
            type="button"
            onClick={() => insertMedicalBlock('cons')}
            className="toolbar-btn medical-btn cons"
            title="Cons Section"
          >
            ❌
          </button>
          <button
            type="button"
            onClick={() => insertMedicalBlock('keypoints')}
            className="toolbar-btn medical-btn keypoints"
            title="Key Points"
          >
            💡
          </button>
        </div>

        {/* Table Controls */}
        <div className="toolbar-group">
          <button
            type="button"
            onClick={addTableRow}
            className="toolbar-btn"
            title="Add Row"
          >
            ➕
          </button>
          <button
            type="button"
            onClick={addTableColumn}
            className="toolbar-btn"
            title="Add Column"
          >
            ➕
          </button>
          <button
            type="button"
            onClick={deleteTableRow}
            className="toolbar-btn"
            title="Delete Row"
          >
            🗑️
          </button>
          <button
            type="button"
            onClick={deleteTableColumn}
            className="toolbar-btn"
            title="Delete Column"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div
        ref={editorRef}
        className="editor-content"
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onContextMenu={handleContextMenu}
        onPaste={handlePaste}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onBlur={handleContentUpdate}
        onKeyUp={handleContentUpdate}
        onMouseUp={() => {
          handleContentUpdate();
          updateAlignmentState();
        }}
        onFocus={() => editorRef.current?.focus()}
        onCompositionEnd={handleContentUpdate}
        placeholder={placeholder}
      />

      {/* Table Modal */}
      {isTableModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Insert Table</h3>
              <button onClick={() => setIsTableModalOpen(false)} className="close-btn">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Rows:</label>
                <input
                  ref={tableRowsInputRef}
                  type="number"
                  min="1"
                  max="50"
                  value={tableRowsInput}
                  onChange={(e) => {
                    setTableRowsInput(e.target.value);
                    // Also update the state immediately for better responsiveness
                    const value = parseInt(e.target.value);
                    if (value && value > 0) {
                      setTableRows(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      insertTable();
                    }
                  }}
                />
              </div>
              <div className="form-group">
                <label>Columns:</label>
                <input
                  ref={tableColsInputRef}
                  type="number"
                  min="1"
                  max="50"
                  value={tableColsInput}
                  onChange={(e) => {
                    setTableColsInput(e.target.value);
                    // Also update the state immediately for better responsiveness
                    const value = parseInt(e.target.value);
                    if (value && value > 0) {
                      setTableCols(value);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      insertTable();
                    }
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsTableModalOpen(false)} className="btn-secondary">
                Cancel
              </button>

              <button onClick={insertTable} className="btn-primary">
                Insert Table
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Insert Image</h3>
              <button onClick={() => setIsImageModalOpen(false)} className="close-btn">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Image URL:</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="form-group">
                <label>Alt Text:</label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Description of the image"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsImageModalOpen(false)} className="btn-secondary">
                Cancel
              </button>
              <button onClick={insertImage} className="btn-primary">
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Insert Link</h3>
              <button onClick={() => setIsLinkModalOpen(false)} className="close-btn">
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>URL:</label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
              <div className="form-group">
                <label>Link Text:</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Click here"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsLinkModalOpen(false)} className="btn-secondary">
                Cancel
              </button>
              <button onClick={insertLink} className="btn-primary">
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
