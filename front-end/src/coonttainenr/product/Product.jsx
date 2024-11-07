import React, { useState } from 'react';
import './product.scss'; // Import the CSS file

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.description && newProduct.price) {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
      setNewProduct({ name: '', description: '', price: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateProduct = (id) => {
    const updatedProduct = prompt('Enter new product details (name, description, price) separated by commas:');
    if (updatedProduct) {
      const [name, description, price] = updatedProduct.split(',');
      setProducts(products.map(product => 
        product.id === id ? { ...product, name, description, price } : product
      ));
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
      
      <div className="flex-container">
        <div className="table-container">
        <input 
        type="text" 
        placeholder="Search for a product..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={() => handleUpdateProduct(product.id)}>Update</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-container">
          <form onSubmit={handleAddProduct}>
            <h2>Add New Product</h2>
            <input 
              type="text" 
              placeholder="Product Name" 
              value={newProduct.name} 
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
              required 
            />
            <input 
              type="text" 
              placeholder="Description" 
              value={newProduct.description} 
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} 
              required 
            />
            <input 
              type="number" 
              placeholder="Price" 
              value={newProduct.price} 
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
              required 
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;