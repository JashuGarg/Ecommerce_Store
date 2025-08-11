import { items } from "../models/items.models.js";



async function adminaddsitems(req,res) {
    const body = req.body;
   
    if(!body || !body.name || !body.price) return res.status(404).send({
            mssg:`All fields are compusory`,
            status : "UnSuccesfull"
        });
    
    try {
        const item = await items.create({
        itemname : body.name,
        price: body.price,
        discount : body.discount || 0,
        description : body.description,  
    })

  return  res.status(201).send({
            mssg:`Item : ${body.name} added to the webpage`,
            status : "Successfull"
        })

    } catch (error) {
            return res.status(502).send({
            mssg:`Error in adding the item : ${error}`,
            status : "UnSuccessfull"
        })
    }
}

export {adminaddsitems}




