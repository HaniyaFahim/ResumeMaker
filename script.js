var UserName = prompt('Enter Your Name: ');
var UserTitle = prompt('Enter Your Title: ');
var UserPhone = prompt('Enter Your Phone Number: ');
var UserEmail = prompt('Enter Your Email Address: ');
var UserAbout = prompt('Tell Us About Yourself: ');
var UserEducation = prompt('What About Your Education: ');
var UserExperience = prompt('You Experience: ');
var UserSkills = prompt('Tell Us About You Skills: ');
var color1 = prompt('Enter the first color for the theme Background Color(e.g., #f1f1f1): ');
var color2 = prompt('Enter the second color for the theme Font Color(e.g., #e1e1e1) ');



document.getElementById('name').textContent = UserName;
document.getElementById('title').textContent = UserTitle;
document.getElementById('phone').textContent = 'Phone: ' + UserPhone;
document.getElementById('email').textContent = 'Email: ' + UserEmail;
document.getElementById('aboutMe').textContent = UserAbout;
document.getElementById('education').textContent =  UserEducation;
document.getElementById('experience').textContent = UserExperience;
document.getElementById('skills').textContent =  UserSkills;

document.body.style.backgroundColor = color1;
document.body.style.color = color2;
document.body.style.fontFamily = 'Edu TAS Beginner, cursive';
document.getElementById('resume-container').style.backgroundColor = color1;
document.getElementById('resume-container').style.color = color2;
document.getElementById('resume-container') = 'Edu TAS Beginner, cursive';




