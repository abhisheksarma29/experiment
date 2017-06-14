const express=require('express');
const router=express.Router();

const Answer=require('../models/answers');
//ertriving - no need  for ours -only following video
router.get('/contacts',function(req,res,next){
    Answer.find(function(err,answers){
        res.json(answers);
    })
    //res.send('Retrieving contact lisr');
});

router.post('/contact',(req,res,next)=>{
    let newAnswer=new Answer({
        answer1:req.body.answer1,
        answer2:req.body.answer2,
        answer3:req.body.answer3,
        answer4:req.body.answer4,
        answer5:req.body.answer5,
        answer6:req.body.answer6,

    });

    newAnswer.save((err,answer)=>{
        if(err)
        {
            res.json({msg:'Fialeed to add answer'});
        }
        else{
            res.json({msg:'Contact added successfully'});
        }
    });
});
module.exports=router;
