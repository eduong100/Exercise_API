<h1>Exercise API</h1>

The base url is: https://exercise-app-duong.herokuapp.com/exercises

One can access the API using the following endpoints (all requests are GET requests):

Data is stored in a MongoDB NoSQL database

<h2>Get All Exercises</h2>
Endpoint: / 

Returns a JSON list of all exercises (Javascript Objects)

Example Request: GET /

Example Response: 
```
[
    {
        "_id": "62bb4fd8396787166ccd5cba",
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
        "id": "1512",
        "name": "all fours squad stretch",
        "target": "quads",
        "__v": 0
    },
    {
        "_id": "62bb4fd8396787166ccd5cb7",
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
        "id": "0001",
        "name": "3/4 sit-up",
        "target": "abs",
        "__v": 0
    }, ...
]
```

<h2>Get List of BodyParts</h2>
Endpoint: /bodyPartList

Returns a JSON list of all body parts (strings)

Response:
```
[
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist"
]
```

<h2>Get list of exercise targets</h2>
Endpoint: /targetList

Returns a JSON list of all exercise targets (strings)

Response:
```
[
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back"
]
```

<h2>Get list of exercise equipment</h2>
Endpoint: /equipmentList

Returns a JSON list of all exercise equipment (strings)

Response:
```
[
  "assisted",
  "band",
  "barbell",
  "body weight",
  "bosu ball",
  "cable",
  "dumbbell",
  "elliptical machine",
  "ez barbell",
  "hammer",
  "kettlebell",
  "leverage machine",
  "medicine ball",
  "olympic barbell",
  "resistance band",
  "roller",
  "rope",
  "skierg machine",
  "sled machine",
  "smith machine",
  "stability ball",
  "stationary bike",
  "stepmill machine",
  "tire",
  "trap bar",
  "upper body ergometer",
  "weighted",
  "wheel roller"
]
```

<h2>Get exercise by ID</h2>
Endpoint: /:id

Return a single exercise with desired id 

Example Request: GET /0015

Example Response:
```
{
    "_id": "62bb4fd8396787166ccd5ccd",
    "bodyPart": "back",
    "equipment": "leverage machine",
    "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
    "id": "0015",
    "name": "assisted parallel close grip pull-up",
    "target": "lats",
    "__v": 0
}
```

<h2>Get exercises by body part</h2>
Endpoint: /bodyPart/:part

Return a JSON list of exercises that match body part (exact match only)

Example Request: GET /bodyPart/neck

Example Response:

```
[
    {
        "_id": "62bb4fd8396787166ccd612d",
        "bodyPart": "neck",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0716.gif",
        "id": "0716",
        "name": "side push neck stretch",
        "target": "levator scapulae",
        "__v": 0
    },
    {
        "_id": "62bb4fd8396787166ccd60bd",
        "bodyPart": "neck",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1403.gif",
        "id": "1403",
        "name": "neck side stretch",
        "target": "levator scapulae",
        "__v": 0
    }
]
```

<h2>Get exercises by name</h2>
Endpoint: /name/:nameQuery

Return a JSON list of exercises that match name (regex matching)

Example Request: GET /name/push

Example Response:
```
[
    {
        "_id": "62bb4fd8396787166ccd5ce9",
        "bodyPart": "upper arms",
        "equipment": "band",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0975.gif",
        "id": "0975",
        "name": "band close-grip push-up",
        "target": "triceps",
        "__v": 0
    },
    {
        "_id": "62bb4fd8396787166ccd5cfc",
        "bodyPart": "waist",
        "equipment": "band",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0992.gif",
        "id": "0992",
        "name": "band push sit-up",
        "target": "abs",
        "__v": 0
    }, ... 
]
```

<h2>Get exercises by target</h2>
Endpoint: /target/:target

Return a JSON list of exercises that match target (exact matching only)

Example Request: GET /target/upper%20back

Example Response:
```
[
    {
        "_id": "62bb4fd8396787166ccd5d4d",
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0064.gif",
        "id": "0064",
        "name": "barbell one arm bent over row",
        "target": "upper back",
        "__v": 0
    },
    {
        "_id": "62bb4fd8396787166ccd5dba",
        "bodyPart": "back",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3162.gif",
        "id": "3162",
        "name": "bodyweight standing one arm row",
        "target": "upper back",
        "__v": 0
    }, ...
]
```

<h2>Get exercises by equipment used</h2>
Endpoint: /equipment/:equipment

Return a JSON list of exercises that match the equipment used (exact matching only)

Example Request: GET /equipment/barbell

Example Response:
```
[
    {
        "_id": "62bb4fd8396787166ccd5d17",
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0023.gif",
        "id": "0023",
        "name": "barbell alternate biceps curl",
        "target": "biceps",
        "__v": 0
    },
    {
        "_id": "62bb4fd8396787166ccd5d1a",
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0026.gif",
        "id": "0026",
        "name": "barbell bench squat",
        "target": "quads",
        "__v": 0
    }, ...
]
```
