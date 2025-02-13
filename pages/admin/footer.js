export default function Footer() {
    const comments = [
      {
        name: "AMANDA SMITH",
        role: "University Student",
        comment: "It’s a really nice course. I feel like the way it was taught really helped my comprehension.",
        course: "Design",
        courseDetails: "UI/UX For Beginners",
        icon: "🟡", // Replace with an actual icon if needed
      },
      {
        name: "JOHN DOE",
        role: "University Student",
        comment: "It’s a really nice course. I feel like the way it was taught really helped my comprehension.",
        course: "Development",
        courseDetails: "Connecting the Beginners",
        icon: "🔵",
      },
      {
        name: "WILL SMITH",
        role: "University Student",
        comment: "It’s a really nice course. I feel like the way it was taught really helped my comprehension.",
        course: "Design",
        courseDetails: "UI/UX For Beginners",
        icon: "🟡",
      },
      {
        name: "ANTONY BUCKET",
        role: "University Student",
        comment: "It’s a really nice course. I feel like the way it was taught really helped my comprehension.",
        course: "Marketing",
        courseDetails: "Market and Sales Marketing",
        icon: "🟥",
      },
    ];
  
    return (
      <footer className="bg-[#e3d4c3] text-black py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Course Comments</h2>
  
          {/* Course Comments Section */}
          <div className="grid grid-cols-4 gap-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-transparent text-left">
                <p className="font-bold">{comment.name}</p>
                <p className="text-sm text-gray-700">{comment.role}</p>
                <p className="mt-2 text-sm">{comment.comment}</p>
                
                {/* Course Info */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg">{comment.icon}</span>
                  <div>
                    <p className="font-bold text-sm">{comment.course}</p>
                    <p className="text-xs text-gray-600">{comment.courseDetails}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Dropdown Menu */}
          <div className="mt-6 flex justify-end">
            <select className="border p-2 text-sm bg-white">
              <option>Select Company</option>
              <option>Company A</option>
              <option>Company B</option>
              <option>Company C</option>
            </select>
          </div>
        </div>
      </footer>
    );
  }
  