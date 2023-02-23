async function parallelDataFetch() {

    const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const api2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
    const api3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

    const [data1, data2, data3] = await Promise.all([api1, api2, api3]);

    const json1 = await data1.json();
    const json2 = await data2.json();
    const json3 = await data3.json();

    console.log(json1, json2, json3);


}