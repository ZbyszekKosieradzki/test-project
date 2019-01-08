function makeRequest0(url) {

    window.fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data);
            return data.movie;
        })
}

function makeRequest(url) {

    return window.fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //data.movie = 'rambo';
            return data;
        })

}
/*
url = './data.json';
makeRequest(url)
.then((data) => {
    console.log(data);
})
*/

function oneClick() {

    return new Promise((resolve, reject) => {
        function callback(evt) {
            const element = evt.target;
            resolve(element);
        }
        window.addEventListener('click', callback);
    });
}

function delay(time) {
    return function (...args) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(...args);
            }, time)
        })
    }
}
/*
oneClick()
    //.then(delay)
    .then(delay(500))
    .then((element) => {
        console.log(element);
    })
*/

function progess(val) {
    
    return function(){
        /*
        return new Promise((resolve) => {            
                console.log(val);
                resolve();
             
        })
        */
       console.log(val);
    }
}

/*
Promise.resolve()
    .then(progess(0))
    .then(delay(1000))
    .then(progess(50))
    .then(delay(1000))
    .then(progess(100))
*/

const files= [
    'data/1.json',
    'data/2.json',
    'data/3.json'
];


Promise
.all(files.map( makeRequest0))
.then((...args)=>{ console.log(args);})
.catch((err)=>{
    console.log(err);
})
.finally((...args)=>{
    console.log('==Finaly===');
    console.log(...args);
});



