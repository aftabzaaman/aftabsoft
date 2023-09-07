// Get elements from the DOM
const inputTextArea = document.getElementById('inputTextArea');
const outputTextArea = document.getElementById('outputTextArea');
const convertButton = document.getElementById('convertButton');
const copyButton = document.getElementById('copyButton');
const downloadLink = document.getElementById('downloadLink');

// Convert text to CSV format
function textToCSV(text) {
    // Replace spaces with commas
    return text.replace(/ /g, ',');
}

// Convert button click event
convertButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    const csvText = textToCSV(inputText);
    outputTextArea.value = csvText;
    // Enable the download button
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvText);
    downloadLink.style.display = 'block';
});

// Copy button click event
copyButton.addEventListener('click', () => {
    outputTextArea.select();
    document.execCommand('copy');
});
