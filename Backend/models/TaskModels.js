const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    }
},
{
    timestamps : true
}
);

module.exports = mongoose.model("Task",TaskSchema);