$(document).ready(function(){
    db.collection('student').get().then((data) => {
        var result ="";
        data.forEach(element => {
            console.log(element);
            result +=`
                <div class="card shadow-lg">
                        <div class="card-header">
                            <img src="${element.data().profile_image}" style="border-radius:50%" width="50" height="50">
                            ${element.data().name}
                            <button class="btn btn-danger float-right"
                            onclick="deletePicture('${element.id}')" type="button">Delete Picture</button>
                         </div>
                        <div class="card-body">
                            <img src="${element.data().post_image}" class="img-fluid">
                        </div>
                </div>
            `;
        });
        $('#result').append(result);
    });
    $('button').on('click', function(){
        var name=$('#name').val();
        var profile=$('#profile').val();
        var post=$('#post').val();

        db.collection('student').add({
            name: name,
            profile_image: profile,
            post_image: post,
        });
    });
});

function deletePicture(pId){
    db.collection('student').doc(pId).delete();
}