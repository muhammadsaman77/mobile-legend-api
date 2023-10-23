## REST API from a mock Mobile Legend database

---

#### Get All User Data

<details>
 <summary><code>GET</code> <code><b>/users</b></code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                                                                                                               |
> | --------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{"status": "success",payload: [{"id": 1,"name": "lana","gender": "secret","victory_count": null,"defeat_count": null,"winrate": 0}]}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:2003/api/v1/users
> ```

</details>

#### Add New User Data

<details>
 <summary><code>POST</code> <code><b>/users</b></code></summary>

##### Parameters

> | name   | type     | data type                    | description |
> | ------ | -------- | ---------------------------- | ----------- |
> | name   | required | string                       | N/A         |
> | gender | required | enum("male,female","secret") | N/A         |

##### Responses

> | http code | content-type              | response                                                        |
> | --------- | ------------------------- | --------------------------------------------------------------- |
> | `201`     | `application/json`        | `{"status":"success","message":"Created new user succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                    |
> | `405`     | `text/html;charset=utf-8` | None                                                            |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data '{"name":"Lana","gender":"secret"}' http://localhost:2003/api/v1/users
> ```

</details>

#### Update Username Data

<details>
 <summary><code>PUT</code> <code><b>/users</b></code></summary>

##### Parameters

> | name     | type     | data type | description |
> | -------- | -------- | --------- | ----------- |
> | old_name | required | string    | N/A         |
> | new_name | required | string    | N/A         |

##### Responses

> | http code | content-type              | response                                                        |
> | --------- | ------------------------- | --------------------------------------------------------------- |
> | `201`     | `application/json`        | `{"status":"success","message":"Updated username succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                    |
> | `405`     | `text/html;charset=utf-8` | None                                                            |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data '{"old_name":"Lana","new_name":"syahrul"}' http://localhost:2003/api/v1/users
> ```

</details>

#### Delete User Data

<details>
 <summary><code>DELETE</code> <code><b>/users</b></code></summary>

##### Parameters

> | name | type     | data type | description |
> | ---- | -------- | --------- | ----------- |
> | name | required | string    | N/A         |

##### Responses

> | http code | content-type              | response                                                    |
> | --------- | ------------------------- | ----------------------------------------------------------- |
> | `201`     | `application/json`        | `{"status":"success","message":"Deleted user succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                |
> | `405`     | `text/html;charset=utf-8` | None                                                        |

##### Example cURL

> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" --data '{"name":"syahrul"}' http://localhost:2003/api/v1/users
> ```

</details>

---

#### Get All Roles Data

<details>
 <summary><code>GET</code> <code><b>/roles</b></code></summary>

##### Parameters

> None

##### Responses

> | http code | content-type       | response                                                                                 |
> | --------- | ------------------ | ---------------------------------------------------------------------------------------- |
> | `200`     | `application/json` | `{"status": "success", payload: [{"id": 9,"name": "afk"},{"id": 2,"name": "assasin"},]}` |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:2003/api/v1/roles
> ```

</details>

#### Add New Role Data

<details>
 <summary><code>POST</code> <code><b>/roles</b></code></summary>

##### Parameters

> | name     | type     | data type | description |
> | -------- | -------- | --------- | ----------- |
> | new_role | required | string    | N/A         |

##### Responses

> | http code | content-type              | response                                                        |
> | --------- | ------------------------- | --------------------------------------------------------------- |
> | `201`     | `application/json`        | `{"status":"success","message":"Created new role succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                    |
> | `405`     | `text/html;charset=utf-8` | None                                                            |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data '{"new_role":"bot"}' http://localhost:2003/api/v1/roles
> ```

</details>

---

#### Add New Hero

<details>
 <summary><code>POST</code> <code><b>/heroes</b></code></summary>

##### Parameters

> | name        | type     | data type | description |
> | ----------- | -------- | --------- | ----------- |
> | name        | required | string    | N/A         |
> | first_role  | required | string    | N/A         |
> | second_role | opsional | string    | N/A         |

##### Responses

> | http code | content-type              | response                                                        |
> | --------- | ------------------------- | --------------------------------------------------------------- |
> | `201`     | `application/json`        | `{"status":"success","message":"Created new hero succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                    |
> | `405`     | `text/html;charset=utf-8` | None                                                            |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data '{"name":""Harley","first_role":"mage","second_role":"assasin",}' http://localhost:2003/api/v1/heroes
> ```

</details>

---

#### Add New Result Battle

<details>
 <summary><code>POST</code> <code><b>/results</b></code></summary>

##### Parameters

> | name   | type     | data type                        | description |
> | ------ | -------- | -------------------------------- | ----------- |
> | status | required | enum("victory","defeat")         | N/A         |
> | durasi | required | time                             | N/A         |
> | mode   | required | enum("classic","ranked","brawl") | N/A         |
> | detail | required | Object (JSON)                    | N/A         |

##### Responses

> | http code | content-type              | response                                                                 |
> | --------- | ------------------------- | ------------------------------------------------------------------------ |
> | `201`     | `application/json`        | `{"status":"success","message":"Created new result battle succesfully"}` |
> | `400`     | `application/json`        | `{"status":"error","message":"Bad Request"}`                             |
> | `405`     | `text/html;charset=utf-8` | None                                                                     |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data '{"status":"victory","durasi":"00:18:13","mode":"classic","detail:[{	"hero_id": 1,"user_id": 1,"level_user": 13,"kill_user": 12,"death_user":3,"asisst_user":5,"gold":12000,"skor":12.5,"grade":"mvp"},{"hero_id": 2,"user_id": 2,"level_user": 14, "kill_user": 10,"death_user":7, "asisst_user":8,"gold":10000, "skor":10.5,"grade":"gold"}]}'  http://localhost:2003/api/v1/heroes
> ```

</details>

---
