const Notice = require('../models/vote');
const respMessage = require('../utils/response.js');


exports.getVoteById =  async (req,res) => {
    const { id } = req.query;
    console.log(id);
    try {
        const notice = await Notice.findById(id);
        if (!notice) {
            return res.status(404).send(respMessage(false, {}, 'Vote not found'));
        }
        return res.status(200).send(respMessage(true, notice, 'Vote found'));
    } catch (err) {
        return res.status(400).send(respMessage(false, {}, 'Vote not found'));
    }
}

exports.createVote =  async (req,res) => {
    try {
        var notice = new Notice(req.body)
        var save = await notice.save()
        return res.status(200).send(respMessage(true, save));
    } catch (error) {
        return res.status(400).send(respMessage(false, {}, error));
        
    }
}

exports.vote =  async (req,res) => {
    var ispresent = false
    const { id,vid,em } = req.query;
    console.log(id);
    const vv = await Notice.findById(id);
    try {
        var prev = vv["votes"]
        var ss = {
            email:em,
            voted:vid
        }
        prev.map((item,index)=>{
            if(item.email == em){
                ispresent=true
            }
        })
        console.log(em.split('@')[1])
        if(ispresent || em.split('@')[1]!="cse.jgec.ac.in"){
            return res.status(200).send(respMessage(false, "Email Out of permission or Previously Voted"));
        }
        prev.push(ss)
        vv.votes = prev

        var up = await Notice.findByIdAndUpdate(id,vv)
        return res.status(200).send(respMessage(true, "success"));
    } catch (error) {
        return res.status(400).send(respMessage(false, {}, error));
        
    }
}
