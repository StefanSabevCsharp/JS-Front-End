function editElement(ref,match,replacer) {

    const content = ref.textContent;
    let newContent = content.replace(new RegExp(match,'g'),replacer);
    ref.textContent = newContent;
}