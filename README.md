# 🌦️ Interview API Code Challenge

Welcome to the Interview API code challenge! This assessment is designed to evaluate your coding skills, problem-solving ability, and approach to real-world tasks in a collaborative environment.

## 📋 Overview
This challenge consists of two parts:

1. **Take-Home Challenge** – Build a basic weather API (use this repo).
   1. The take-home portion should be **polished and complete**, with all test cases passing.
2. **Live Coding Session** – Expand and iterate on your take-home solution (will be done in the coding interview meeting that you scheduled).
   1. The **live session** will be more about **how you think and solve problems** in real time.
   2. It’s okay if you don’t finish everything in the live session — we're interested in how you work, not just what you build.


## 🧠 Objective
Create a simple weather API that returns human-readable weather information.
Your API gets its weather data from the locally mocked weather API and then processes the response

Responses should be in the following format:

```
{emoji} {temperature}°
```
For example: `🌧️ 50°`

## 📦 Getting Started
Run the test suite via the test script in the package.json file.

## 🛠️ Implementation Details

✅ Guide Lines
* ❗ Only edit src/index.ts.
    * Do not view any other files in the `src` folder (honor system).
* 🌐 Use the built-in `fetch` function to retrieve weather data from the weather API.
* 🔍 Do not use AI assistance (honor system).
* 📘 Follow the OpenAPI specification below when consuming the mock API to get the weather data.
* ✅ Make all test cases pass.

### Open API weather spec
```
openapi: 3.0.0
info:
  title: Mocked Weather API
  version: 1.0.0
  description: This is a mocked API for weather information.
servers:
  - url: http://weatherapi.com/
paths:
  /weather:
    get:
      summary: Get weather information
      parameters:
        - in: query
          name: zip
          schema:
            type: string
          required: true
          description: The ZIP code for which to get the weather information.
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  temperature:
                    type: integer
                    example: 72
                  condition:
                    type: string
                    example: Sunny
        '404':
          description: Not Found
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: Not Found
        '500':
          description: Internal Server Error
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: Internal Server Error
```

## 🤝 Tips for Success
* Focus on clarity and correctness over cleverness.
* Keep your code clean, well-structured, and commented.
* Think about error handling and edge cases.
* Don't worry if you run into issues — even if tests aren’t all green, bring what you have to the live session.

## 🚀 Good Luck!
We’re excited to see your work and how you approach this problem. Have fun, and don’t hesitate to bring questions or assumptions to the live interview!