import express from "express";
import { ApiResponse } from "./custom-types";

import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient();

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", async (
    req,
    res: ApiResponse<User, 200>) => {
    
    const user = await prisma.user.create({
        data: {
            name: "Test McGee",
        },
    });

    res.status(200).json(user);
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
