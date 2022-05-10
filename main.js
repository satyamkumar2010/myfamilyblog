var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.google.com/search?q=animation+father.jpg&rlz=1C1CHBF_enIN957IN957&sxsrf=ALiCzsZzkU5cxlo2UQf82F_H15_6kGXvvg:1652188147967&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiYnKW9gNX3AhUQUGwGHTTGCXsQ_AUoAXoECAEQAw&biw=1366&bih=657#imgrc=Q1DP6wnkhhoCRM","https://www.google.com/search?q=animation+mother.jpg&tbm=isch&ved=2ahUKEwj-ybC_gNX3AhXQ9jgGHZ4cBMEQ2-cCegQIABAA&oq=animation+mother.jpg&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoGCAAQBxAeOgQIABAeOgYIABAFEB5QlRBY2UVgzFFoAnAAeACAAfkBiAH8FpIBBjAuMTEuNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=-GN6Yv7tFNDt4-EPnrmQiAw&bih=657&biw=1366&rlz=1C1CHBF_enIN957IN957#imgrc=Yqf4YUHsUFmKcM","https://www.google.com/search?q=animation+brother.jpg&tbm=isch&ved=2ahUKEwj3y_CdgtX3AhXixaACHbmHBqIQ2-cCegQIABAA&oq=animation+brother.jpg&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoECAAQHjoGCAAQBRAeULINWN0uYK05aABwAHgAgAHOAYgBuROSAQYwLjEzLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=ymV6Yve-OuKLg8UPuY-akAo&bih=657&biw=1366&rlz=1C1CHBF_enIN957IN957#imgrc=gy6_XbbfOgKxrM","https://www.google.com/search?q=animation+sister.jpg&tbm=isch&ved=2ahUKEwiJi_y9gtX3AhUs_jgGHTGfBuAQ2-cCegQIABAA&oq=animation+sister.jpg&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoECAAQHjoGCAAQBRAeUJULWOAtYMoxaABwAHgAgAH_AYgBkxWSAQYwLjExLjOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=DmZ6YonMD6z84-EPsb6agA4&bih=657&biw=1366&rlz=1C1CHBF_enIN957IN957#imgrc=HW25ZzCRa5f-DM","https://www.google.com/search?q=animation+grand+ma.jpg&tbm=isch&ved=2ahUKEwiM4pTWgtX3AhVSzqACHTXJBOwQ2-cCegQIABAA&oq=animation+grand+ma.jpg&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoECAAQHjoGCAAQBRAeUL8GWJosYKYuaABwAHgAgAH6AYgBxhSSAQYwLjE0LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=QGZ6YozCPNKcg8UPtZKT4A4&bih=657&biw=1366&rlz=1C1CHBF_enIN957IN957#imgrc=BlVcXVtKTopOyM"];
var names = ["Fmaily Book","Satish Singh", "Rekha singh", "Satyam Kumar", "Shivani Kumari", "Anita Devi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
