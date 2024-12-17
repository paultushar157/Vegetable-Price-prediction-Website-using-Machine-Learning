# Vegetable Price Prediction Website

This repository contains a **Vegetable Price Prediction Website** that leverages **Machine Learning** to predict vegetable prices based on historical data. The project aims to provide a simple and interactive interface for farmers, traders, and consumers to estimate future vegetable prices accurately.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Dataset](#dataset)
5. [Machine Learning Model](#machine-learning-model)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Project Structure](#project-structure)
9. [Future Enhancements](#future-enhancements)
10. [Contributing](#contributing)

---

## Project Overview
This project builds a web-based application that predicts vegetable prices using historical price and market data. By analyzing trends using a Machine Learning model, the system provides accurate predictions to help stakeholders in agriculture make informed decisions.

---

## Features
- **Interactive User Interface:** A simple and user-friendly web application.
- **Price Predictions:** Predict future vegetable prices based on historical data.
- **Data Visualization:** Charts and graphs to display trends and predictions.
- **Custom Input:** Users can enter specific parameters for prediction.

---

## Technologies Used
- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, JavaScript
- **Machine Learning:** Scikit-learn, Pandas, NumPy
- **Data Visualization:** Matplotlib, Plotly
- **Web Server:** Flask

---

## Dataset
- The dataset contains historical vegetable prices, dates, and other relevant features such as state,district,market,Min_price,Max_price,Modal_price.
- Data Source:government portals(https://agmarknet.gov.in/), or custom-collected data.

---

## Machine Learning Model
The project uses a **regression model** to predict vegetable prices. The steps include:
1. Data Preprocessing: Cleaning and preparing the data.
2. Feature Engineering: Selecting and transforming features.
3. Model Selection: Decision tree, Random Forest, or Gradient Boosting.
4. Time series Analysis:ARIMA and SARIMA.
5. Training: Training the model with historical price data.
6. Evaluation: Evaluating the model using RMSE, MAE, and R² score.

---

## Installation
To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vegetable-price-prediction.git
   cd vegetable-price-prediction
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install the required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask application:**
   ```bash
   python app.py
   ```

5. Open the website in your browser:
   ```
   http://127.0.0.1:5000/
   ```

---

## Usage
1. Launch the application locally or on a hosting platform.
2. Upload or enter the required data (e.g., date, vegetable type, location).
3. Click on **Predict** to see the predicted price.
4. View price trends and other visualizations.

---

## Project Structure
```
vegetable-price-prediction/
|
|-- app.py                   # Main Flask application
|-- templates/               # HTML templates for frontend
|   |-- index.html           # Home page
|-- static/                  # CSS and JS files
|   |-- style.css            # Custom styles
|-- model/                   # Machine Learning model files
|   |-- model.pkl            # Trained model
|-- data/                    # Dataset directory
|   |-- vegetable_prices.csv # Sample dataset
|-- requirements.txt         # Required libraries
|-- README.md                # Project documentation
```

---

## Future Enhancements
- Integrate real-time data collection using APIs.
- Add more advanced models such as LSTM for time series analysis.
- Deploy the application on platforms like Heroku or AWS.
- Add multi-language support for better accessibility.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`feature-branch-name`).
3. Commit your changes.
4. Open a pull request.

---


**Contact**
For questions or suggestions, please contact:
- **Name:** TUSHAR PAUL
- **Email:** paultushar157@gmail.com
- **GitHub:**(https://github.com/Paultushar157)

---

**Happy Coding! 🌱✨**
