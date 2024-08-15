const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set up the view engine and serve static files
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Object to store client locations
const clients = {};

io.on("connection", (socket) => {
    console.log("User connected: " + socket.id);

    // Store the new client
    clients[socket.id] = { id: socket.id };

    // When a client sends their location
    socket.on("send-location", (data) => {
        clients[socket.id] = { id: socket.id, ...data };

        // Broadcast the new location to all clients
        io.emit("receive-location", { id: socket.id, ...data });
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);

        // Remove the client from the clients object
        delete clients[socket.id];

        // Notify all clients about the disconnection
        io.emit("user-disconnected", socket.id);
    });

    // Send existing locations to the newly connected client
    socket.on("request-initial-data", () => {
        for (const id in clients) {
            if (id !== socket.id) {
                socket.emit("receive-location", clients[id]);
            }
        }
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
