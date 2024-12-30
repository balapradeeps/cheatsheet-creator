# **Cheatsheet Creator**

A simple, containerized web application to generate Linux cheat sheets. This project uses Nginx to serve a static HTML, CSS, and JavaScript-based interface that helps users visualize and customize IPTables commands from a markdown file.

---

## **Features**
- Upload a markdown file to render formatted cheat sheets.
- View Linux commands with descriptions.
- Lightweight and fast, powered by Nginx.

---

## **Prerequisites**
To use this application, ensure you have Docker installed. Download and install Docker from [Docker's official website](https://www.docker.com/products/docker-desktop).

---

## **How to Run**

### **Step 1: Pull the Docker Image**
Pull the prebuilt Docker image from Docker Hub:
``` 
docker pull balapradeeps/cheatsheet-creator:1.1
```

### **Step 2: Run the Docker Container**
Run the container on your local machine:
```
docker run -d -p 8080:80 balapradeeps/cheatsheet-creator:1.1
```

### **Step 3: Access the Application**
Open your browser and go to:
```
http://localhost:8080
```

You can now use the application to upload a markdown file and view the generated cheatsheet.

---

## **Usage Instructions**
1. **Upload a Markdown File:**
   - Click the `Choose File` area at the bottom-right corner of the app.
   - Select a `.md` file containing your cheat sheet in the specified format.

2. **Format for Markdown File:**
   The markdown file should use the following format for proper rendering:
   ```markdown
   # Section Title
   - **Description**: `Command`
   - **Another Description**: `Another Command`
   ```

3. **Interact with the Cheatsheet:**
   - Uploaded commands and descriptions will render in individual cards.
   - Use the interface for easy viewing.

---

## **Custom Markdown Example**
Save the following content in a `cheatsheet.md` file to test:
```markdown
# Basic Commands
- **List IPTables Rules**: `iptables -L`
- **Flush All Rules**: `iptables -F`

# Custom Chains
- **Create a New Chain**: `iptables -N my_chain`
- **Delete a Chain**: `iptables -X my_chain`
```

Upload this file, and the application will render it in an organized manner.

---

## **Stopping the Application**
To stop the running container:
``` 
docker stop <container-id>
```

To remove the container:
``` 
docker rm <container-id>
```

---

## **Contributing**
If you'd like to contribute to this project:
1. Clone the repository:
   ``` 
   git clone https://github.com/balapradeeps/cheatsheet-creator.git
   ```
2. Build the image locally for testing:
   ``` 
   docker build -t cheatsheet-creator .
   ```
3. Submit a pull request with your changes.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Let me know if you'd like additional sections or refinements!