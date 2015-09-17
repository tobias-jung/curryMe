$(document).ready(function() {
        
    restoreContents();
    
    $('#edit').bind('click', toggleEditContent);
    $('#clear').bind('click', resetContent);
    
    function saveContents() {
        var todoList = $('#todolist').html();
        localStorage['todoList'] = todoList;
    }
    
    function restoreContents() {
        var myTodoList = localStorage['todoList'];
        if (myTodoList != undefined) {
            $('#todolist').html(myTodoList);
        }
    }
    
    function toggleEditContent(e) {
    	 if ($('#todolist').attr('contenteditable') == 'false') {
             $('#todolist').attr('contenteditable', 'true');
             $('#edit').val('Speichern');
             $('#todolist').focus();
         } else {
             $('#todolist').attr('contenteditable', 'false');
             $('#edit').val('Bearbeiten');
             saveContents();
         }
     }
    
    function resetContent(e) {
        localStorage.clear();
        window.location.reload();
    }
    
});

