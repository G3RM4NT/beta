import json
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Cargar datos de productos
def load_products(file_path):
    with open(file_path, 'r') as f:
        products = json.load(f)
    return products

# Función para crear un modelo de recomendación
def create_recommendation_model(products):
    # Aquí puedes implementar la lógica para crear un modelo de recomendación
    # Por ejemplo, usando características de productos o historial de compras
    # Para este ejemplo, vamos a suponer que tenemos un vector de características para cada producto
    product_features = np.array([product['features'] for product in products])
    return product_features

# Función para obtener recomendaciones
def get_recommendations(product_id, product_features, products, top_n=5):
    # Calcular similitudes
    similarities = cosine_similarity(product_features)
    
    # Obtener el índice del producto
    product_index = next((index for index, product in enumerate(products) if product['id'] == product_id), None)
    
    if product_index is None:
        return []

    # Obtener las similitudes del producto seleccionado
    similar_indices = similarities[product_index].argsort()[-top_n-1:-1][::-1]
    
    # Obtener los productos recomendados
    recommended_products = [products[i] for i in similar_indices]
    return recommended_products

if __name__ == "__main__":
    # Cargar productos
    products = load_products('data/products.json')
    
    # Crear el modelo de recomendación
    product_features = create_recommendation_model(products)
    
    # Ejemplo de uso: obtener recomendaciones para un producto específico
    product_id = 1  # Cambia esto al ID del producto que deseas usar
    recommendations = get_recommendations(product_id, product_features, products)
    
    # Mostrar recomendaciones
    print("Recomendaciones para el producto ID", product_id)
    for product in recommendations:
        print(f"Producto ID: {product['id']}, Nombre: {product['name']}")