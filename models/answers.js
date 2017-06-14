const mongoose=require('mongoose');

const AnswerSchema=mongoose.Schema({
    answer1:{
        type:String,
        required:true
    },
    answer2:{
        type:String,
        required:true
    },
    answer3:{
        type:String,
        required:true
    },
    answer4:{
        type:String,
        required:true
    },
    answer5:{
        type:String,
        required:true
    },
    answer6:{
        type:String,
        required:true
    }

});

const Answer=module.exports=mongoose.model('Answer',AnswerSchema);