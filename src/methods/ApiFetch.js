
import COGNITO_CONFIG from "../configs/configs";
import {ReportData, OrchardList, VarietyList } from "../data/TestData";
export default function fetchChemical(dataContent) {
    fetch('https://develop-spectre-data.hectre.com/api/chemicals', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
              let i = 1;
              data.forEach(element => {
                  dataContent[i-1] = {} 
                  dataContent[i-1].key = i.toString();
                  dataContent[i-1].chemicalType = element.chemicalType;
                  dataContent[i-1].activeIngredient = element.activeIngredient;
                  dataContent[i-1].name = element.name;
                  dataContent[i-1].phi = element.phi;
                  i++;
              });
          })
        } else {
            res.json().then((data) => {
            let errorMessage = 'fetch failed';
            console.log(errorMessage);
            console.log(data)
          })
        }
        });
}
export  function fetchAccessToken() {
     fetch('https://hectre-code-challenge.auth.ap-southeast-2.amazoncognito.com/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }, 
        body:  `client_id=${COGNITO_CONFIG.client_Id}&code=${COGNITO_CONFIG.AUTHORIZATION_CODE}&grant_type=authorization_code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fcallback`
        })
        .then((res) => {
          if (res.ok) {
            res.json().then((data) => {
                console.log(data)
                COGNITO_CONFIG.ACCESS_TOKEN = data.access_token;
                console.log(COGNITO_CONFIG.AUTHORIZATION_CODE)
                console.log('token fetched apifetch')
            })
          } else {
              res.json().then((data) => {
                  console.log(data)
            //   let errorMessage = 'fetch failed';
            //   console.log(errorMessage);
              console.log(data)
            })
          }
        });
}
export function fetchReportData() {
    fetch('https://develop-spectre-data.hectre.com/api/harvest', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ COGNITO_CONFIG.ACCESS_TOKEN
        }
        }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
              console.log(data);
              let i = 0;
              data.forEach(ele => {
                  ReportData[i] = {}
                  ReportData[i].id = ele.id;
                  ReportData[i].hoursWorked = ele.hoursWorked;
                  ReportData[i].numberOfBins = ele.numberOfBins;
                  ReportData[i].orchardId = ele.orchardId;
                  ReportData[i].payRatePerHour = ele.payRatePerHour;
                  ReportData[i].pickingDate = ele.pickingDate;
                  ReportData[i].userId = ele.userId;
                  ReportData[i].varietyId = ele.varietyId;
                  i++
              })
          })
        } else {
            res.json().then((data) => {
            let errorMessage = 'fetch failed';
            console.log(errorMessage);
            console.log(data)
          })
        }
        });
}
export function fetchOrchards() {
    fetch('https://develop-spectre-data.hectre.com/api/orchards', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ COGNITO_CONFIG.ACCESS_TOKEN
        }
        }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
              console.log(data);
              let i = 0;
              data.forEach(ele => {
                  OrchardList[i] = {}
                  OrchardList[i].id = ele.id;
                  OrchardList[i].name = ele.name;
                  i++;
              })
          })
        } else {
            res.json().then((data) => {
            let errorMessage = 'fetch failed';
            console.log(errorMessage);
            console.log(data)
          })
        }
        });
}
export function fetchVarieties() {
    fetch('https://develop-spectre-data.hectre.com/api/varieties', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ COGNITO_CONFIG.ACCESS_TOKEN
        }
        }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
              console.log(data);
              let i = 0;
              data.forEach(ele => {
                  VarietyList[i] = {}
                  VarietyList[i].id = ele.id;
                  VarietyList[i].name = ele.name;
                  i++;
              })
          })
        } else {
            res.json().then((data) => {
            let errorMessage = 'fetch failed';
            console.log(errorMessage);
            console.log(data)
          })
        }
        });
}