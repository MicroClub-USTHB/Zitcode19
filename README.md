# Zitcode19

COVID-19 prevention &amp; safety dedicated mobile app by Micro Club members (also fighting coronavirus with zit zitoun according to bilel)

# Dev branch
This branch is dedicated to continuous development (all sorts of work to be pushed here)

# Back-end
Some documentation for front-end devs
_VERY IMPORTANT_: for development reasons, we use a local connection to the database, to toggle the connection to a hosted databse, do the following:
1. go to `app-server/models/index.js`.
2. in the line _6_, you will find that `process.env.MONGODB_URI` is commented, **_UNCOMMENT_** it

## Models / Routes
_Note_: The javascript included is going to contain the properties and an example of data.
### User:
+ **Properties preceded by a:**
	1. _' - '_ are required to sign up a user.
	2. _' + '_ are required to sign in a user
	```javascript
	{
		/* - */firstName: "John",
		/* - */lastName: "Wick",
		/* - */sex: "Male",
		/* - */date_of_birth: "1964-09-02",
		/* - */location: "Los Angeles",
		/* - + */phone: "06518XXXXX",
		/* - + */password: "password",
		covid_19_test: "false",
		profileImageUrl: "",
		userType: "user",
		meetings: [],
		chronicle_dis: []
	}
	```
+ **Routes**:
	| METHOD | ROUTE | DESCRIPTION | RESULT |
	|:--------:|:-------------:|:-------------:|:-------------:|
	| POST | /api/auth/signup | create a user (returns a JWT)|{firstName, lastName, sex, date_of_birth, location, covid_19_test, userType, JWT}|
	| POST | /api/auth/signin | Returns a JWT about a certain user |Same result as _Sign up_|

**Note**: the result of _sign up_ or _sgin in_ a user is an object containing the user's infos beside his _phone_ and _password_ + a JWT containing all these infos.

---
### Zone:

+ **Properties preceded by a:**
	1. _' - '_ are required to Create a Zone.
	```javascript
	{
		/* - */longitude: 15,
		/* - */latitude: 45,
		/* - */wilaya: "Algiers",
		/* - */risk_state: "Medium",
		medical_etablissement: [ObjectId]
	}
	```
+ **Routes**:
	| METHOD | ROUTE | DESCRIPTION | RESULT |
	|:--------:|:-------------:|:-------------:|:-------------:|
	| GET | /api/zones/:user_id | Get all Zones |Array of Zones: `[ {longitude, latitude, wilaya, risk_state} ]`|
	| POST | /api/zones/:user_id | Create a Zone | returns the created Zone: `{longitude, latitude, wilaya, risk_state}` |
	| GET | /api/zones/:user_id/:zone_id | Get one Zone | Returns the Fetched Zone |
	| DELETE | /api/zones/:user_id/:zone_id | Delete a Zone | Returns the Deleted Zone |

**Note**: Not anyone can create a Zone, only users with _admin_ roles have access to such a thing, that's why we specify the user_id in the route, and to ensure authorization, in the header the followed property must be available while fetching:
```javascript
{
	header: {
		"authorization": "Bearer <token of currentUser>"
	}
}
```
---

### Medical Establishment:

+ **Properties preceded by a:**
	1. _' - '_ are required to Create a Zone.
	```javascript
	{
		/* - */name: "Touahria",
		/* - */location: "Douera",
		/* - */phone: "0560401169",
		/* - */type: "Pharmacy",
		zone: ObjectId
	}
	```
+ **Route**:
	| METHOD | ROUTE | DESCRIPTION | RESULT |
	|:--------:|:-------------:|:-------------:|:-------------:|
	| GET | /api/medical_etab/:user_id | Get all Medical Etabs|Array of Medical Establishments: `{name, location, phone, type, location, zone: {id, wilaya, risk_state}}`|
	| POST | /api/medical_etab/:user_id/:zone_id | Create a Medical Establishment |`{name, location, phone, type, location, zone: {id, wilaya, risk_state}}`|
	| GET | /api/medical_etab/:user_id/:medical_etab_id | Get one Medical Establishment |Returns a Medical Establishment|
	| DELETE | /api/medical_etab/:user_id/:medical_etab_id | Delete a Medical Establishment |Returns the Deleted Medical Establishment|
