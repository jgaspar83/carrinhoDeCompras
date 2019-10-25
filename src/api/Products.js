import products from "./products-data.json";

//Exporta os produtos do arquivo json
export class Products {

    //Retorna todos os produtos
    static getProducts() {
        return new Promise((resolve, reject) => {
            if (products) {
                resolve(products);
            }
            else {
                reject();
            }
        });
    }

    //Passa um ID e ele nos retorna um produto unico
    static getProductById(id) {
        return new Promise((resolve, reject) => {

            const product = products.items.find(p => p.id === parseInt(id));

            if (product) {
                resolve(product);
            }
            else {
                reject();
            }
        });
    }
}