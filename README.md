Requires node version 6.9.1 or 6.x.x

ux ->
npm install ->
node index.js

node-api ->
npm install ->
node index.js

to make ux build ->
npm run build

check sample.xml for xml file format.

Below is the vehicle type and features.


| Vehicle Type | Frame | Powertrain  | Wheels |
| ------------- | ------------- | ------------- | ------------- |
|Big Wheel |	plastic |	Human |	3 plastic (front, rear left, rear	right)|
|Bicycle| metal| Human| 2 metal (front, rear)|
|Motorcycle| metal| Internal Combustion| 2 metal (front, rear)|
|Hang Glider| plastic| Bernoulli| none|
|Car| metal|Internal Combustion|4 (front right, front left, rear right, rear left)|


Working:
On any xml file upload mobx action is called which calls api and then api in backend sends the data to engine,
engine then converts, validates and computes the data and returns the result which is then stored in database
and returns the response result and then it is rendered on ui.
