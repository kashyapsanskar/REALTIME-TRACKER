# Real-Time Device Tracking System

## Overview

This project is a real-time device tracking system that allows users to track multiple devices on an interactive map. The system updates the location of devices in real-time and displays them on a map, ensuring users can see the current positions of all tracked devices.

## Tech Stack

- **Node.js**: Server-side runtime environment for handling asynchronous operations and real-time communication.
- **Socket.io**: Library for real-time, bidirectional event-based communication between the server and clients.
- **Express**: Web application framework for serving the front-end application and handling HTTP requests.
- **Leaflet.js**: JavaScript library for interactive maps to visualize device locations on the map.
- **EJS**: Templating engine for rendering dynamic HTML pages on the server side.

## Features

- **Real-Time Location Updates**: Continuously tracks and updates device locations on an interactive map.
- **Interactive Map**: Displays device locations using Leaflet.js, with real-time updates as locations change.
- **Multi-Client Support**: Manages multiple clients, ensuring each user can view the current locations of all tracked devices.
- **Dynamic Marker Management**: Adds, updates, and removes markers on the map based on device status and disconnections.
- **Efficient Server-Client Communication**: Uses Express to serve the application and Socket.io for seamless real-time communication.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kashyapsanskar/REALTIME-TRACKER.git
