<template>
    <div id="app">
       <!-- <div>
           <input type="text" v-model="search" placeholder="Buscar ..." />
       </div> -->

        <div>
            <label for="product-name">Nome do Produto
                <input type="text" id="product-name" v-model="product.name" placeholder="Nome"/>
            </label>

            <label for="product-brand">Marca
                <input type="text" id="product-brand" v-model="product.brand" placeholder="Marca"/>
            </label>

            <label for="product-value">Valor
                <input type="text" id="product-value" v-model="product.value" placeholder=""/>
            </label>

            <label for="product-date">Data
                <input type="date" id="product-date" v-model="product.date" placeholder="00/00/0000"/>
            </label>

            <button @click="addProduct()">Salvar</button>
        </div>

        <div>
             <ul>
                <li v-for="product of products" v-bind:key="product['.key']">
        
                    <div v-if="!product.edit">
                        {{ product.product.name}}
                        <div>
                            <button @click="removeProduct(product['.key'])">Deletar</button>
                            <button @click="setEditProduct(product['.key'])">Editar</button>
                        </div>
                    </div>
    
                    <div v-else>
                        <input type="text" v-model="product.product.name"  />
                        <input type="text" v-model="product.product.brand" />
                        <input type="text" v-model="product.product.value" />
                        <input type="date" v-model="product.product.date"  />
                        
                        <button @click="saveEdit(product)">Salvar</button>
                        <button @click="backEdit(product['.key'])">Voltar</button>
                    </div>

                </li>
            </ul>
        </div>
    
    </div>
</template>

<script>
import { productRef } from './database/firebase'

export default {
    data(){
        return{
            product: { }
        }
    },
    firebase: {
        products: productRef 
    },
    methods:{
        addProduct(){
            productRef.push({
                product: this.product, edit: false
            })
            this.product = {}
        },
        removeProduct(product) {
             productRef.child(product).remove()
        },
        setEditProduct(product) {
            productRef.child(product).update({
                edit: true
            })
        },
        backEdit(product) {
            productRef.child(product).update({
                edit: false
            })
        },
        saveEdit(product) {
            const key = product['.key']
            productRef.child(key).set({
                product: {
                    name: product.product.name,
                    brand: product.product.brand,
                    value: product.product.value,
                    date: product.product.date
                },
                edit: false
            })
        }
    }
}
</script>

<style>

</style>