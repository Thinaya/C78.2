var images = 
["https://png.pngtree.com/png-clipart/20190121/ourlarge/pngtree-cartoon-hand-drawn-happy-family-illustration-design-cartoon-hand-painted-happy-png-image_517629.jpg",
    "https://th.bing.com/th/id/OIP.slaiC4Mrl0NJ561MOAeltAHaI5?pid=ImgDet&rs=1",
"https://th.bing.com/th/id/R.c8a14da6470f59d46d8bdfcaef17469f?rik=gdsdBUkbz0zgyg&riu=http%3a%2f%2fwww.kidsworldfun.com%2fimages%2fstory-contest%2f2017-1%2fhigh-schoolgirl.png&ehk=HJi2nQN7dUc9cTTmcz8%2bIxQjiMOuaMvzRhc9%2fLBluko%3d&risl=&pid=ImgRaw",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/A_Happy_Working_Mom_Cartoon.svg/488px-A_Happy_Working_Mom_Cartoon.svg.png",
"https://www.pngitem.com/pimgs/m/67-675055_dad-cartoon-png-transparent-png.png",
"https://th.bing.com/th/id/R.5d98ba8d109e62118547ab94124ff4ea?rik=vTnHJrfe0N66RQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2flab-puppy-clipart-6.jpg&ehk=7%2bS3IoDx5yfLoCqLp284esvjDk2ZBuiyvGmv6kAbV%2fo%3d&risl=&pid=ImgRaw"
];

var names = ["Family Book", "Baby Brother", "Me", "Mum","Dad","Dog"]

var i = 0 
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
{
    i = 0
}

    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}