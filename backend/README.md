**Set up the backend locally**:  
 1. Run yarn install in the backend folder
 2. Run yarn develop to start the backend
 3. Open localhost:1337 in your browser
 4. Create an admin user (this will only be stored locally in the database)

**Set permissions**:
 1. Go to Settings → Users & Permissions Plugin → Roles
     
     <img width="226" height="372" alt="Screenshot 2025-07-22 at 20 15 23" src="https://github.com/user-attachments/assets/87097f47-3470-4338-9eba-0a069e83caa7" />  
 2. Click Edit on the Authenticated role
 3. Under User-progress → Select all → Save
  
   <img width="641" height="372" alt="Screenshot 2025-07-22 at 20 17 34" src="https://github.com/user-attachments/assets/a0fd18f3-40cc-46c2-b109-09675f0662d3" />

 4. Go to Settings → Users & Permissions Plugin → Roles
 5. Click Edit on the Public role
 6. Under Chapter → enable find, findOne
 7. Under Course-content → enable find
 8. Under Lesson → enable find, findOne
 9. Save the changes
