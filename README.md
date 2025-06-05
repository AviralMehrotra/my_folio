# My Folio

A modern, responsive portfolio website built with React.js, featuring a clean design and smooth animations. This portfolio showcases my projects, skills, and provides a contact form using EmailJS integration.

## 🌟 Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Interactive project showcase
- Contact form with EmailJS integration
- Social media links
- Skills and experience section
- Downloadable resume option

## 🚀 Live Demo

[View Live Demo](https://aviralmehrotra.netlify.app/)

## 🛠️ Technologies Used

- React.js
- CSS3
- EmailJS
- Swiper.js
- BoxIcons

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/AviralMehrotra/my_folio.git
```

2. Install dependencies
```bash
cd my_folio
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
my_folio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── scrollup/
│   ├── App.js
│   └── index.js
├── .env
├── .env.example
└── package.json
```

## 🎨 Customization

1. **Personal Information**: Update your personal information in the respective component files
2. **Projects**: Add your projects in the projects section
3. **Skills**: Modify the skills section with your expertise
4. **Styling**: Customize the theme colors in the CSS variables
5. **Images**: Replace the images in the assets folder with your own

## 📱 Responsive Design

The portfolio is fully responsive and works well on:
- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 📧 Contact Form

The contact form uses EmailJS for sending emails. To set up:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Add your credentials to the `.env` file

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AviralMehrotra/my_folio/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aviral Mehrotra**
- LinkedIn: [@aviralmehrotra9](https://www.linkedin.com/in/aviralmehrotra9)
- Email: aviralmehrotra9402@gmail.com

## 🙏 Acknowledgments

- [BoxIcons](https://boxicons.com/) for the icons
- [EmailJS](https://www.emailjs.com/) for the email service
- [Swiper](https://swiperjs.com/) for the slider component
