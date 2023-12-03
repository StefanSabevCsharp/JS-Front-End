function addItem() {
    let field = document.getElementById("newItemText");
    let list = document.getElementById("items");
    let li = document.createElement("li");
    li.textContent = field.value;
    list.appendChild(li);
    field.value = "";

    const deleteBtn = document.createElement("a");
    deleteBtn.textContent = "[Delete]";
    deleteBtn.href = "#";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deletingContent);

    function deletingContent(e) {
        e.currentTarget.parentNode.remove();
    }
}
