$.ajax({method : 'GET',
    url:"https://jsonplaceholder.typicode.com/comments",
    typeDate: 'json'
}).done(function(data){
    console.log(data)
    $.map(data,function(postId,id,name,email,body){
        $('#result').append ('
        <h6>${post.postId}</h6>
        <h6>${post.id}</h6>
        <h6>${post.name}</h6>
        <h6>${post.email}</h6>
        <h6>${post.body}</h6>
        `)
    })
})
$('#my-user').submit(function(e){
    e.preventDefault()
    let postId = $('postId').val()
    let  id = $('#id').val()
    let name = $('name').val()
    let email = $('email').val()
    let body= $('body').val()
    let url = $(this).attr('action')
    $.post(url,{postI,id,name,email,body}).done(function(data){
        $('#result').append(`<p>${data.postId}`)
    })
    
}