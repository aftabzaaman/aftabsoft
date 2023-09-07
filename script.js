
const inputTextArea = document.getElementById('inputTextArea');
const outputTextArea = document.getElementById('outputTextArea');
const convertButton = document.getElementById('convertButton');
const copyButton = document.getElementById('copyButton');
const downloadLink = document.getElementById('downloadLink');


function textToCSV(text) {

    return text.replace(/ /g, ',');
}


convertButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    const csvText = textToCSV(inputText);
    outputTextArea.value = csvText;
    // Enable the download button
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvText);
    downloadLink.style.display = 'block';
});


copyButton.addEventListener('click', () => {
    outputTextArea.select();
    document.execCommand('copy');
});
