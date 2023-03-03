import React from "react";

const Details = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold">
          Home Page
        </h1>
        <div className=" rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-gold">
                <th className="py-4">Name</th>
                <th className="py-4">Email</th>
                <th className="py-4">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold">
              <tr>
                <td className="py-4">John Doe</td>
                <td className="py-4">john.doe@example.com</td>
                <td className="py-4">(123) 456-7890</td>
              </tr>
              <tr>
                <td className="py-4">Jane Doe</td>
                <td className="py-4">jane.doe@example.com</td>
                <td className="py-4">(555) 555-5555</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
