<h1>Exercise API</h1>

The base url is: https://exercise-app-duong.herokuapp.com/exercises

One can access the API using the following endpoints (all requests are get requests):

<h2>Get All Exercises</h2>
Endpoint: / 

Returns a JSON list of all exercises (Javascript Objects)

Exercise example: (Javascript Object)
```
{
  "_id": "62bb4fd8396787166ccd5cba",
  "bodyPart": "upper legs",
  "equipment": "body weight",
  "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
  "id": "1512",
  "name": "all fours squad stretch",
  "target": "quads",
  "__v": 0
}
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
