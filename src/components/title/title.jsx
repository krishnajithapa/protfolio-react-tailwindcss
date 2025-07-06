import React from "react";

/**
 * Title component displays a styled heading.
 * @param {Object} props
 * @param {string} props.title - The text to display as the title.
 */
function Title({ title }) {
  return (
    <h2
      className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left pt-6"
      // Responsive and accessible heading
    >
      {title}
    </h2>
  );
}

export default React.memo(Title); // Memoize for performance if title doesn't change
