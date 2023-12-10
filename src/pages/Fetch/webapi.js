export async function register(email, password) {
    let user = {};
    user.email = email;
    user.password = password;
    try {
        let response = await fetch('https://mydomain.com/register', {
            method: 'post',
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            return false;
        }
        let data = response.json();
        console.log(data);
        return true;
    } catch (error) {
        console.log('register ' + error);
        return false;
    }
}

export async function login(email, password) {
    let user = {};
    user.email = email;
    user.password = password;
    try {
        let response = await fetch('https://mydomain.com/login', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
			        'X-API-Key': 'your-api-key',
			        'X-API-Host': 'api-domain3.p.api.com',
		        },
        });

        if (!response.ok) {
            return false;
        }

        let security = await response.json();
        localStorage.setItem('t0k3n', security.token);
        return true;
    } catch (error) {
        console.log('login error: ' + error);
        return false;
    }
}

export function logout() {
    localStorage.removeItem('t0k3n');
}

export async function store(endpoint, model) {
    try {
        await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify(model)
        });
    } catch (error) {
        console.log('store ' + error)
    }
}

export async function show(endpoint, id) {
    try {
        let response = await fetch(endpoint + '/' + id);
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('show ' + error)
    }
}

export async function remove(endpoint) {
    try {
        await fetch(endpoint + '/' + id, {
            method: 'delete'
        });
    } catch (error) {
        console.log('remove ' + error)
    }
}

export async function index(endpoint) {
    try {
        let response = await fetch(endpoint);

        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('index ' + error);
    }
}

export async function update(endpoint, id, model) {
    try {
        await fetch(endpoint + '/' + id, {
            method: 'put',
            body: JSON.stringify(model)
        });
    } catch (error) {
        console.log('update ' + error);
    }
}

export async function download(url) {
    setTimeout(() => {
      const response = {
        file: url
      };
      window.open(response.file);
    }, 100);
}

export function basicAuthCredential(user, password) {
    var token = user + ":" + password;
    var hash = btoa(token);
    return 'Basic '+hash;
}