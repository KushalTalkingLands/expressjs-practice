const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'user',
    fields:()=>({
       id:{type:GraphQLInt},
       name:{type:GraphQLString},
       email:{type:GraphQLString},
       phone:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:'xyz',
    fields:{
        codeimprove:{
            type:new GraphQLList(UserType),
            resolve(parent,args){
                let data =[
                    {
                    id:12,name:'Kushal Choudhary',email:'sauryachoudhary7@gmail.com',phone:8697644180
                },
                {
                    id:13,name:'Kushagra Choudhary',email:'kushagrachoudhary17@gmail.com',phone:5382375646
                }]
            return data
            }
        }
    }
})

module.exports = new GraphQLSchema({ query:RootQuery})