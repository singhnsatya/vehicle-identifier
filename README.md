ux ->
npm install ->
npm start

node-api ->
npm install ->
node index.js

to make ux build ->
npm run build

check sample.xml for xml file format.

Architecture:
On any xml file upload mobx action is called which calls api and then api in backend sends the data to engine,
engine then converts, validates and computes the data and returns the result which is then store in database
and returns the response result and then it is rendered on ui.
