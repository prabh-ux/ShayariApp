import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* 📞 Contact Section */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Punjabi Shayari. All Rights Reserved.</p>
        <Link to="/contact" className="text-red-400">Contact Us</Link>
       

      </footer>
    </div>
  )
}

export default Footer
