const lib  = function (selector = null) {

    const elements = document.querySelectorAll(selector);

    const obj = {

        length: elements.length,

        val: (index=0)=> {
            return elements[index].value;
        },

        change: (className) =>  {
            elements.forEach(element => {
                element.className = className;
            })
            return obj;
        },

        remove: (className) =>  {
            elements.forEach(element => element.classList.remove(className))
            return obj;
        },

        addClass: (className) =>  {
            elements.forEach(element => element.classList.add(className))
            return obj;
        },

        getDataSet: (key) => {

            const result = []

            elements.forEach(element => {
                const data = element.dataset[key];
                result.push(data)
            });

            return result;
        },

        append: (content) => {
            elements.forEach(element => {
                element.innerHTML += content;
            });

            return obj;
        },

        ajax: () => {

            return {
                get: (url, config = {}) => {
                    return fetch(url, config = {});
                },

                post: (url, body) => {

                    const params = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body)
                    }

                    return fetch(url, params);
                }
            };
        }

    }

    return obj;

}