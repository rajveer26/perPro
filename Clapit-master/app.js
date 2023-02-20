const express = require("express");
const app = express();

const employeeRouter = require('./src/Employee/employeeRoutes');
const departmentRouter = require('./src/department/departmentRoutes');
const projectRouter = require('./src/Project/projectRoutes');
const bodyParser = require("body-parser");
const adminRouter = require('./src/admin/adminRoutes');
const techRouter = require('./src/tech/techRoutes');
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello world");
});

//Using body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/v1/empintech",techRouter);
app.use("/api/v1/project",projectRouter);
app.use("/api/v1/department",departmentRouter);
app.use("/api/v1/employee",employeeRouter);
app.use("/api/v1/admin",adminRouter);

module.exports = app;