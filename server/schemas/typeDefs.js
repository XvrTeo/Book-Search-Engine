const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    input saveBookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
    }

    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!):Auth
        createUser(username: String!, email: String!, password: String!):Auth
        saveBook(bookToSave: saveBookInput!):User
        removeBook(bookId: String!):User
    }
`;

module.exports = typeDefs;