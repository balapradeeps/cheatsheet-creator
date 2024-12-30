# Use an official Nginx image as a base
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy project files into the container
COPY index.html styles.css script.js ./

# Expose port 80 for serving the application
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]