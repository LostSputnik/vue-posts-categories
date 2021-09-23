<template>
    <div>
        <form @submit.prevent="addNewCategory">
            <input type="text" placeholder="Type new category" v-model="newCategory">
            <button type="submit">Add Category</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
    name: 'AddCategory',
    data() {
        return {
            newCategory: ''
        }
    },
    computed: {
        ...mapGetters(['allCategories'])
    },
    methods: {
        ...mapActions(['addCategory']),
        addNewCategory(){
            if(this.newCategory){
                const category = {
                    title: this.newCategory,
                    isEditing: false,
                    tempEdit: ''
                }
                this.addCategory(category)
                this.newCategory = ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    justify-content: space-between;
}
form button{
    font-size: 12px;
}
input[type="text"] {
    width: 75%;
}
</style>