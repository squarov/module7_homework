let object = {a: 3};

function fun(key, obj) {
    if (key in obj) {
            console.log(true);
        } else {
            console.log(false);
        }
}
fun('a', object);