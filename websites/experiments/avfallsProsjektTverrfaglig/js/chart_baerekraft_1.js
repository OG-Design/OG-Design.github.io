// import {function themeSwitch1()} from "../HomePageDesign1";

const ctx_baerekraft1 = document.getElementById("chart_baerekraft_mengdeAvfallUtregnet");

let vekt_2019_husholdning = 2455000;
let vekt_2020_husholdning = 2546000;
let vekt_2021_husholdning = 2488000;
let vekt_2022_husholdning = 2203000;


let barColors = ["grey"];

new Chart(ctx_baerekraft1, {

    // chart type
    type:"bar",

    data: {
        labels: ["2022", "2023","2024", 2025],
        datasets: [{
            label:"Metric tonne",
            data: [vekt_2019_husholdning , vekt_2020_husholdning , vekt_2021_husholdning , vekt_2022_husholdning],
            borderWidth:2,
            backgroundColor:barColors,
            color:"black",
        }],
        
        options: {
            responsive: true,
            scales: {
                y: {
                    display: true,
                    beginAtZero: true,
                    color: "black",
                    title: {
                        display: true,
                        align: "center",
                        text: "a",
                        color:"white", 
                        
                        font: {
                            family: "Times",
                            size: 20,
                            style: "normal",
                            lineHeight: 1.2,
                            
                        },
                        padding: {
                            top: 30,
                            left: 0,
                            right: 0,
                            bottom: 0,

                        },

                    }
                }
            }
        }
            
    }

    })