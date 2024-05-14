# Log Ingestor

Log Ingestor is a web application for managing and searching logs. It allows users to search logs based on various criteria, add new logs, and view all logs.
![image](https://github.com/Ans155/Quality-log-control/assets/110165397/8da485a9-f81b-4daa-88fa-29d408d843c6)



## Features

- **Search Logs**: Users can search logs based on keywords, date ranges, and log levels.
- **Add Logs**: Users can add new logs with information such as source, log level, and log message.
- **View All Logs**: Users can view all logs stored in the system.
- **Advanced Filters**: Allows searching within specific date ranges and utilizing regular expressions for search.
- **Responsive UI**: The user interface is responsive and works well on different devices and screen sizes.
![image](https://github.com/Ans155/Quality-log-control/assets/110165397/4d999406-1616-442f-ab0b-5496da1209c6)

## Technologies Used

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB
- **Other Tools**: Axios (HTTP client), React Router (for routing)
![image](https://github.com/Ans155/Quality-log-control/assets/110165397/d70f8817-09aa-4eed-ac99-fdd55154c2c7)

## How to Use

1. **Clone the Repository**: `git clone https://github.com/your-username/log-ingestor.git`
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies for both the client and server.
3. **Set Up the Backend**:
   - Ensure MongoDB is installed and running on your machine.
   - Update the MongoDB connection string in the server configuration file (`server/db.js`) if necessary.
4. **Run the Application**:
   - Start the backend server: `npm run dev`
   - Start the frontend development server: `npm run start`
5. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the application.

