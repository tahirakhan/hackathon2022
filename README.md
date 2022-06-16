# Innovation Hub 2022 VROOZI Project Management System

Innovation Hub 2022 VROOZI Project Management System
There are three applications that run to make this dashboard work
```
clone https://github.com/tahirakhan/hackathon2022
```

## API To get data from the Google Sheek and webhook
```
cd google-sheet-data-service
mvn clean compile package

mvn spring-boot:run
```
## Jira Integration API that communicate with Jira
```
cd ..
cd vroozi-jiraapi
npm install
cd conf
cp default.template default.json
vi default.json
//"jira-token":"<JIRA-KEY>" update this property with your JIRA-KEY save default.json
cp default.json production.json
cd ..
npm start
```
## Frontend application which renders the dashboard
```
cd ..
cd innovation_hub_dashboard
npm install
npm start
```
#### Credits: We have used http://webapplayers.com/inspinia_admin-v2.9.4/ Theme for the Front end appliation
