import mongoose from 'mongoose';
// const date = new Date()

const creaturesSchema =  new mongoose.Schema({
    name: {
        type: String,  
        required: true
    },

    creatureType: {
        type: String,  //dragon, unicorn, alien
        required: true
    },

    creatureSkill: {
        type: String,
        required: true
    },

    weakness: {
        type: String
    },
    
    creatureCreationDate: {
        type: Date,
        required: true,
        default: Date.now
    }

})

//model allows us to interact directly with the database using this schema
export default mongoose.model('Creatures', creaturesSchema);
