function SelectOption(option) {
    var i = document.getElementById('optionSelection');
    i.value = option;
    document.forms['options'].submit();
    return false;
}