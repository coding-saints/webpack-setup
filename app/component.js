export default function(text = 'ello people') {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}