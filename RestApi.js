class RestApi {
  #baseUrl = null;
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  getList() {
    return fetch(this.#baseUrl).then((resp) => resp.json());
  }
  create(obj) {
    return fetch(this.#baseUrl, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  }
  update(obj) {
    return fetch(this.#baseUrl + obj.id, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  }

  delete(id) {
    return fetch(this.#baseUrl + id, {
      method: 'DELETE',
    });
  }
}
