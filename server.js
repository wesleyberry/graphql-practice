const express = require("express");
const expressGraphQL = require("express-graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require("graphql");
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Hello",
        fields: () => ({
            message: { type: GraphQLString }
        })
    })
})

app.use("/graphql", expressGraphQL({
    graphiql:true
}));
app.listen(5000., () => console.log("Server is running..."));