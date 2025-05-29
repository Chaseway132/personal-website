HOW TO ADD YOUR PHOTO TO YOUR PORTFOLIO WEBSITE

1. Prepare your photo:
   - Choose a professional headshot or portrait
   - Crop it to a square aspect ratio (1:1)
   - Resize it to at least 500x500 pixels for good quality
   - Save it as "profile.jpg" (or profile.png)

2. Add your photo to this folder:
   - Place the "profile.jpg" file in this folder (public/images/)

3. Update the HTML code:
   - Open the index.html file
   - Find the profile image section (around line 95)
   - Replace the placeholder div with your image:
     
     FROM:
     <div class="w-full h-full bg-gray-300 flex items-center justify-center">
       <span class="text-gray-600">Add your photo here...</span>
     </div>
     
     TO:
     <img src="/images/profile.jpg" alt="Peter Mwangi" class="w-full h-full object-cover">

4. Do the same for the about.html page:
   - Open the about.html file
   - Find the profile image section (around line 90)
   - Replace the placeholder div with your image as shown above

5. Refresh your browser to see the changes

Note: If your image appears stretched or doesn't fit well, you may need to adjust the CSS. 
The "object-cover" class should help maintain the aspect ratio while filling the container.
